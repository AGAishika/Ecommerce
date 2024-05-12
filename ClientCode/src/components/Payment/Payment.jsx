import React, { useEffect, useRef } from "react";
import CheckOutStep from "../Cart/CheckOutStep";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useAlert } from "react-alert";
import axios from "axios";
import { clearErrors, createOrder } from "../../Redux/Action/OrderAction"



const options = {
  style: {
    base: {
      frontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
export default function Payment() {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // sessionStorage.setItem('orderInfo', JSON.stringify(data))
  //console.log(orderInfo)

  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.orders);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
  //stripe pese mai leta hai is liye 200 hua 20000 pese

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.itemsPrice,
    taxPrice: orderInfo.taxPrice,
    shippingPrice: orderInfo.shippingPrice,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // dispatch(createOrder(order));
    // return
    document.querySelector("#pay_btn").disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/payment/process",
        paymentData,
        config
      );
      console.log(data);
      const client_secret = data.client_secret;
      //console.log(client_secret)

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              // phone: shippingInfo.phoneNo,
              postal_code: shippingInfo.postalcode,
              //currency: 'usd',
              country: shippingInfo.country,
            },
          },
        },
      });
      console.log(result);
      if (result.error) {
        alert.error(result.error.message);
        document.querySelector("#pay_btn").disabled = false;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("payment successful")
          //todo : new order
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch(createOrder(order));
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment");
        }
      }
    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      alert.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    console.log("heloo payment")
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
  }, [dispatch, error, alert]);
  return (
    <>
      <CheckOutStep shipping confirmOrder payment />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg">
            <h1 className="mb-4">Card Info</h1>
            <div className="form-group">
              <label htmlFor="card_num_field">Card Number</label>
              <CardNumberElement
                type="text"
                id="card_num_field"
                className="form-control"
                options={options}
              />
            </div>

            <div className="form-group">
              <label htmlFor="card_exp_field">Card Expiry</label>
              <CardExpiryElement
                type="text"
                id="card_exp_field"
                className="form-control"
                options={options}
              />
            </div>

            <div className="form-group">
              <label htmlFor="card_cvc_field">Card CVC</label>
              <CardCvcElement
                type="text"
                id="card_cvc_field"
                className="form-control"
                options={options}
              />
            </div>

            <button
              id="pay_btn"
              type="submit"
              onClick={submitHandler}
              className="btn btn-block py-3"
            >
              Pay {`-${orderInfo && orderInfo.totalPrice}`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

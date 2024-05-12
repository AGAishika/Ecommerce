import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import MetaData from '../Layout/MetaData';
import CheckOutStep from './CheckOutStep';

export default function ConfirmOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { shippingInfo, cartItems } =  useSelector(state => state.cart)

    console.log(cartItems)
    const {user} = useSelector(state => state.auth)

    //calculte order prices
    
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/payment')
    }
  return (
    <>
      <MetaData title={'Confirm Order'} />
      <CheckOutStep shipping confirmOrder/> 
      <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-8 mt-5 order-confirm">

                        <h4 className="mb-3">Shipping Info</h4>
                        <p><b>Name:</b> {user && user.name}</p>
                        <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                        <p className="mb-4"><b>Address:</b>{`${shippingInfo.address},${shippingInfo.city},${shippingInfo.postalcode},${shippingInfo.country}`} </p>

                        <hr />
                        <h4 className="mt-4">Your Cart Items:</h4>
                        {
                            cartItems.map(item => (
                                <>
                                    <hr />
                                    <div className="cart-item my-1">
                                        <div className="row">
                                            <div className="col-4 col-lg-2">
                                                <img src={item.image} alt="Laptop" height="45" width="65" />
                                            </div>

                                            <div className="col-5 col-lg-6">
                                                <NavLink to={`/product/${item.product}`}>{item.name}</NavLink>
                                            </div>


                                            <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                                <p>{item.quantity} X ${item.price} = <b>${item.quantity * item.price}</b></p>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />

                                </>
                            ))
                        }



                    </div>

                    <div className="col-12 col-lg-3 my-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            <p>Subtotal:  <span className="order-summary-values">${itemsPrice}</span></p>
                            <p>Shipping: <span className="order-summary-values">${shippingPrice}</span></p>
                            <p>Tax:  <span className="order-summary-values">${taxPrice}</span></p>

                            <hr />

                            <p>Total: <span className="order-summary-values">${totalPrice}</span></p>

                            <hr />
                            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processToPayment}>Proceed to Payment</button>
                        </div>
                    </div>


                </div>
            </div>
    </>
  )
}
import React, { useState } from "react";
import SmallBar from "../Layout/SmallBar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addItemsToCart, removeCartItems } from "../../Redux/Action/CartAction";
import { REMOVE_CART_ITEM } from "../../Redux/Constants/CartConstant";
function Scart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);

  const {isAuthenticated} = useSelector(state => state.auth)

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return alert("This product is out of stock ");
    }
    // action is calling here
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return alert("Quantity cannot be less than 1");
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const removeCartHandler = (id) => {
    dispatch(removeCartItems(id));
  };

  const checkoutHandler = () => {
     if(isAuthenticated){
      navigate('/shipping')
     }else{
      navigate('/login');
     }
  }
  return (
    <>
      <SmallBar />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <table className="table table-borderless table-responsive">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, key) => (
                  <tr>
                    <td className="align-middle">
                      <img src={item.image} alt="" style={{ width: "50px" }} />
                      {item.name}
                    </td>
                    <td className="align-middle">Rs.{item.price}</td>
                    <td className="align-middle ">
                      <div className="input-group quantity wid mr-3">
                        <div className="input-group-btn">
                          <button
                            className="btn bg-primary shop_cart px-2 py-1"
                            onClick={() =>
                              decreaseQty(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control bg-secondary border-0 text-center"
                          value={item.quantity}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn bg-primary shop_cart px-2 py-1"
                            onClick={() =>
                              increaseQty(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      Rs.{item.price * item.quantity}
                    </td>
                    <td className="align-middle">
                      <button
                        onClick={() => removeCartHandler(item.product)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa fa-times text-white fw-bold"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
            <form action="" className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="form-control border-0 p-3"
                />
                <div className="input-group-append">
                  <button className="btn bg-primary text-black">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <div className="section-title text-uppercase fw-bold mb-4 mb-3 h5">
              <span className="bg-secondary px-2">Cart Summary</span>
            </div>
            <div className="bg-light p-4">
              <div className="border-bottom">
                <div className="d-flex justify-content-between">
                  <h6 className="text-dark">Subtotal</h6>
                  <p className="text-dark">{`₹${cartItems
                    .reduce((acc, val) => acc + val.quantity * val.price, 0)
                    .toFixed(2)}`}</p>
                </div>

                {/* <div className="d-flex justify-content-between">
                  <h6 className="text-dark">Shipping</h6>
                  <p className="text-dark">$10</p>
                </div> */}
              </div>

              <div className="total pt-2">
                <div className="d-flex justify-content-between">
                  <h5 className="text-dark fw-bold">Total</h5>
                  <h5 className="text-dark fw-bold">{`₹${cartItems
                    .reduce((acc, val) => acc + val.quantity * val.price, 0)
                    .toFixed(2)}`}</h5>
                </div>
              </div>

              <button className="btn bg-primary  text-dark fw-bold w-100 p-3 mt-4" onClick={checkoutHandler}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scart;

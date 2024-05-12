import React from "react";
import { NavLink } from "react-router-dom";

export default function CheckOutStep({ shipping, confirmOrder, payment }) {
  return (
    <>
      <div className="checkout-progress d-flex justify-content-center mt-5">
        {shipping ? (
          <NavLink to="shipping" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Shipping</div>
            <div className="triangle-active"></div>
          </NavLink>
        ) : (
          <NavLink to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Shipping</div>
            <div className="triangle-incomplete"></div>
          </NavLink>
        )}
        {confirmOrder ? (
          <NavLink to="/order/confirm" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">ConfirmOrder</div>
            <div className="triangle-active"></div>
          </NavLink>
        ) : (
          <NavLink to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">ConfirmOrder</div>
            <div className="triangle-incomplete"></div>
          </NavLink>
        )}

        {payment ? (
          <NavLink to="/payment" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Payment</div>
            <div className="triangle-active"></div>
          </NavLink>
        ) : (
          <NavLink to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Payment</div>
            <div className="triangle-incomplete"></div>
          </NavLink>
        )}
      </div>
    </>
  );
}

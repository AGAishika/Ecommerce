import React from "react";
import { NavLink } from "react-router-dom";

function SmallBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5 align-items-center">
          <div className="col-12">
            <nav className="breadcrumb bg-light py-3 px-3 mb-3">
              <div className="d-flex">
                <NavLink to="#" className="text-dark  breadcrumb-item">
                  Home
                </NavLink>
                <span className="ms-2">/</span>
                <NavLink to="#" className="text-dark  ms-2 breadcrumb-item">
                  Shop
                </NavLink>
                <span className="ms-2">/</span>
                <NavLink to="#" className="ms-2  breadcrumb-item active">
                  Shop List
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallBar;

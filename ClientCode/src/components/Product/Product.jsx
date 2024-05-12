import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Product({ product, key }) {
  const [bgColor, setBgColor] = useState(true);

  // console.log(product);
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-0 pb-1">
        <div className="product-item">
          <NavLink to={`/product/${product._id}`}>
            <div className="product-img overflow-hidden">
              <img src={product.image.url} alt="" className="img-fluid" />
              <div className="product-action">
                <a to="" className="btn btn-outline-dark mx-1 ">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <a to="" className="btn btn-outline-dark">
                  <i className="far fa-heart"></i>
                </a>
                <a to="" className="btn btn-outline-dark mx-1">
                  <i className="fa fa-sync-alt"></i>
                </a>
                <a to="" className="btn btn-outline-dark">
                  <i className="fa fa-search"></i>
                </a>
              </div>
            </div>
          </NavLink>

          <div className="product-text-box text-center py-4">
            <NavLink
              to={`/products/${product._id}`}
              className="h6 text-decoration-none"
            >
              {product.name}
            </NavLink>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5 className="h5">Rs.{product.price}</h5>
              <h6 className="text-muted ms-2">{/* <del>$123.00</del> */}</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span>
                <small className="fa fa-star text-primary"></small>
              </span>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              {bgColor ? (
                <small
                  className="fa fa-star "
                  onClick={(e) => setBgColor(false)}
                ></small>
              ) : (
                <small
                  className="fa fa-star text-primary"
                  onClick={(e) => setBgColor(true)}
                ></small>
              )}
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

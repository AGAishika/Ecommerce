import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
function Shop() {
    const [bgColor, setBgColor] = useState(true);
  return (
    <>
      {/* shop bar */}
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

      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <h5 className="section-title text-uppercase fw-bold mb-4">
              <span className="bg-secondary">Filter By price</span>
            </h5>
            <div className="form bg-light p-4 mb-3">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      All Price
                    </label>
                  </div>
                  <span className="border px-1">1000</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className id="#" />
                    <label className="custom-control-label ms-2">
                      $0-$100
                    </label>
                  </div>
                  <span className="border px-1">150</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      $100-$200
                    </label>
                  </div>
                  <span className="border px-1">295</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      $200 - $300
                    </label>
                  </div>
                  <span className="border px-1">246</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      $300 - $400
                    </label>
                  </div>
                  <span className="border px-1">145</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      $400 - $500
                    </label>
                  </div>
                  <span className="border px-1">168</span>
                </div>
              </form>
            </div>

            <h5 className="section-title text-uppercase fw-bold mb-4">
              <span className="bg-secondary">Filter By Color</span>
            </h5>
            <div className="form bg-light p-4 mb-3">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      All Color
                    </label>
                  </div>
                  <span className="border px-1">1000</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">Black</label>
                  </div>
                  <span className="border px-1">150</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">Red</label>
                  </div>
                  <span className="border px-1">295</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">Red</label>
                  </div>
                  <span className="border px-1">246</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">Yellow</label>
                  </div>
                  <span className="border px-1">145</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">Green</label>
                  </div>
                  <span className="border px-1">168</span>
                </div>
              </form>
            </div>

            <h5 className="section-title text-uppercase fw-bold mb-4">
              <span className="bg-secondary">Filter By size</span>
            </h5>
            <div className="form bg-light p-4 mb-3">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">
                      All Size
                    </label>
                  </div>
                  <span className="border px-1">1000</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">XS</label>
                  </div>
                  <span className="border px-1">150</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">S</label>
                  </div>
                  <span className="border px-1">295</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">M</label>
                  </div>
                  <span className="border px-1">246</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">L</label>
                  </div>
                  <span className="border px-1">145</span>
                </div>

                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <div className="input-item">
                    <input type="checkbox" className="" id="#" />
                    <label className="custome-control-label ms-2">XL</label>
                  </div>
                  <span className="border px-1">168</span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="button">
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large btn-light"></i>
                    </button>
                    <button className="btn btn-light btn-sm ms-2">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>

                  <div className="btn-group">
                    <div className="dropdown-button">
                      <button
                        className="btn btn-light btn-sm dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sorting
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Latest
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Popularity
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Best Rating
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>

                    <div className="dropdown-button ms-2">
                      <button
                        className="btn btn-light btn-sm dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Showing
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              10
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              20
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              30
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-0 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6 mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6 mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
                <div className="product-item">
                  <div className="product-img overflow-hidden">
                    <img
                      src="https://pnecommerce.netlify.app/img/product-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="product-action">
                      <a href="" className="btn btn-outline-dark mx-1 ">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark mx-1">
                        <i className="fa fa-sync-alt"></i>
                      </a>
                      <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product-text-box text-center py-4">
                    <a href="#" className="h6 text-decoration-none">
                      Camera
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5 className="h5">$123.00</h5>
                      <h6 className="text-muted ms-2">
                        <del>$123.00</del>
                      </h6>
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

              <div className="col-12">
                <div className="pages-btn">
                  <nav>
                    <ul className="pagination justify-content-center mt-3">
                      <li className="page-item">
                        <NavLink to="/" className="page-link text-primary">
                          Previous
                        </NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link">
                          1
                        </NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link ">
                          2
                        </NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link ">
                          3
                        </NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link">
                          Next
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Shop;

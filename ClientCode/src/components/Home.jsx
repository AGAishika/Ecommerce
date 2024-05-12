import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/Action/CategoryAction";
import Loader from "./Layout/Loader";
import { getproduct } from "../Redux/Action/ProductAction";
import Product from "./Product/Product";

// action ka kam dispatch ka kam krta h
function Home() {
  const [bgColor, setBgColor] = useState(true);

  const dispatch = useDispatch();
  const { categoires, error, loading } = useSelector((state) => state.cat);
  // console.log(categoires);
   
  const { products } = useSelector((state) => state.pro);
  // console.log(products);

  useEffect(() => {
    // now calling action by using dispatch function
    dispatch(getCategories());
    dispatch(getproduct());
  }, [dispatch]);

  return (
    <>
      {/* carousel starts here  */}
      <div className="container-fluid mb-4 mt-3">
        <div className="row px-xl-5">
          {/* owl carousel  */}
          <div className="col-lg-8">
            <div
              id="carouselExampleCaptions"
              className="carousel slide mb-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src=" https://pnecommerce.netlify.app/img/carousel-1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__backInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto text-white animate__animated animate__bounceIn">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src=" https://pnecommerce.netlify.app/img/carousel-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto text-white animate__animated animate__bounceIn ">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://pnecommerce.netlify.app/img/carousel-3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto  text-white animate__animated animate__bounceIn">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-offer mb-3">
              <img
                src="https://pnecommerce.netlify.app/img/offer-1.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">SAVE 20%</h6>
                <h3 className="text-white">Special Offer</h3>
                <a href="" className="btn bg-primary">
                  Shop Now
                </a>
              </div>
            </div>

            <div className="product-offer mb-3">
              <img
                src="https://pnecommerce.netlify.app/img/offer-2.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">SAVE 20%</h6>
                <h3 className="text-white">Special Offer</h3>
                <a href="" className="btn bg-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* carousel end here  */}

      {/* featured start here  */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{ backgroundColor: "#FFFFFF", padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary"></h1>
              <h5 className="featureHeadingColors ms-3">Quality Product</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{ backgroundColor: "#FFFFFF", padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary"></h1>
              <h5 className="featureHeadingColors ms-3">Free Shipping</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{ backgroundColor: "#FFFFFF", padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary"></h1>
              <h5 className="featureHeadingColors ms-3">14-Day Return</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{ backgroundColor: "#FFFFFF", padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary"></h1>
              <h5 className="featureHeadingColors ms-3">24/7 support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* featured code ends here \ */}

      {/* categories code starts here\ */}
      <div className="container-fluid pt-5">
        <h2 className="section-title text-uppercase mb-4 px-xl-5">
          <span className="bg-secondary fw-bold px-2">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {loading ? (
            <Loader />
          ) : (
            categoires?.map((cat, i) => (
              <>
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <a href="" className="text-decoration-none ">
                    <div className="cat-item d-flex align-items-center mb-4">
                      <div
                        className="overflow-hidden"
                        style={{ width: "100px", height: "100px" }}
                      >
                        <img src={cat.image.url} alt="" className="img-fluid" />
                      </div>
                      <div className="heading">
                        <h6 className="featureHeadingColors ps-1">
                          {cat.name}
                        </h6>
                        <small className="text-body ps-1">100 Products</small>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            ))
          )}
        </div>
      </div>
      {/* categories code ends here */}

      {/* Featured Products starts here  */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title text-uppercase fw-bold mb-4 px-xl-5">
          <span className="bg-secondary px-2">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {loading ? (
            <Loader />
          ) : (
            products.map((pro, key) => (
              <>
                <Product key={pro.id} product={pro} />
              </>
            ))
          )}
        </div>
      </div>
      {/* Featured Products ends here  */}

      {/* Offer Start here  */}
      <section className="offer_start">
        <div className="container-fluid pt-5 pb-3">
          <div className="row px-xl-5">
            <div className="col-md-6">
              <div className="product-offer mb-3">
                <img
                  src="https://pnecommerce.netlify.app/img/offer-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="offer-text">
                  <h6 className="text-white text-uppercase">SAVE 20%</h6>
                  <h3 className="text-white">Special Offer</h3>
                  <a href="" className="btn bg-primary">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="product-offer mb-3">
                <img
                  src="https://pnecommerce.netlify.app/img/offer-2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="offer-text">
                  <h6 className="text-white text-uppercase">SAVE 20%</h6>
                  <h3 className="text-white">Special Offer</h3>
                  <a href="" className="btn bg-primary">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer ends here  */}

      {/* Recent Product start here  */}
      <section className="offer_start">
        <div className="container-fluid pt-5 pb-3">
          <div className="h2 section-title text-uppercase fw-bold mb-4 px-xl-5">
            <span className="bg-secondary px-2">Recent Products</span>
          </div>

          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
            <div className="col-lg-3 col-md-4 col-sm-6  mt-3 pb-1">
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
          </div>
        </div>
      </section>
      {/* Recent Product ends here  */}
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import SmallBar from "../Layout/SmallBar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import {
  getproduct,
  getproductdetails,
} from "../../Redux/Action/ProductAction";
import { NavLink, useParams } from "react-router-dom";
import { addItemsToCart } from "../../Redux/Action/CartAction";
function ProductDetail() {
  
  const [quantity, setQuantity] = useState(1);

  const increasedQty = () => {
    if (products.stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  // action is calling here
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity))
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.pd);
  // console.log(products);
  useEffect(() => {
    dispatch(getproductdetails(id));
  }, [dispatch, id]);

  return (
    <>
      {/* small bar  */}
      <SmallBar />

      <div className="container-fluid">
        <div className="row px-xl-5 mb-30">
          <div className="col-lg-5 mb-5">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
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
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img
                    src={products?.image?.url}
                    className=" w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={products?.image?.url}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={products?.image?.url}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={products?.image?.url}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>

              <a
                href=""
                className="carousel-control-prev"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left"></i>
              </a>
              <a
                href=""
                className="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#carouselExampleCaptions"
              >
                <i className="fa fa-2x fa-angle-right"></i>
              </a>
            </div>
          </div>
          {/* <!-------col-lg-5--------------> */}
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3 className="fw-bold text-dark">{products.name}</h3>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star-half-alt text-primary"></small>
                  <small className="far fa-star text-primary"></small>
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="fw-bold text-dark mb-4">${products.price}</h3>
              <p className="mb-4">{products.description}</p>
              <div className="d-flex mb-3">
                {/* <strong className="text-dark mr-3">Sizes:</strong> */}
                {/* <form action="">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                      id="radio1"
                    />
                    <label htmlFor="radio1" className="custom-control-label">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      XL
                    </label>
                  </div>
                </form> */}
              </div>
              <div className="d-flex mb-3">
                {/* <strong className="text-dark mr-3">Colors:</strong>
                <form action="">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      White
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Red
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Green
                    </label>
                  </div>
                </form> */}
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity wid mr-3">
                  <div className="input-group-btn">
                    <button
                      className="btn bg-primary shop_cart"
                      onClick={decreaseQty}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    value={quantity}
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn bg-primary shop_cart"
                      onClick={increasedQty}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <NavLink to={"/cart"}>
                  <button
                    onClick={addToCartHandler}
                    className="btn bg-primary shop_cart px-3"
                    defaultValue="Search..."
                  >
                    <i className="fa fa-shopping-cart mr-2"></i>
                    Add To Cart
                  </button>
                </NavLink>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a href="" className=" px-2">
                    <i className="fab fa-facebook-f text-dark"></i>
                  </a>
                  <a href="" className=" px-2">
                    <i className="fab fa-twitter text-dark"></i>
                  </a>
                  <a href="" className=" px-2">
                    <i className="fab fa-linkedin-in text-dark"></i>
                  </a>
                  <a href="" className=" px-2">
                    <i className="fab fa-pinterest text-dark"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          {/* <!-- Nav tabs --> */}
          <div className="tabs_container bg-light py-5">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  data-bs-toggle="tab"
                  href="#menu1"
                >
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  data-bs-toggle="tab"
                  href="#menu2"
                >
                  Reviews(0)
                </a>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div className="tab-content bg-light">
              <div className="tab-pane container active" id="home">
                <h4 className="mb-3 mt-3 text-black">Product Description</h4>
                <p>{products.description}</p>
                <p>{products.description}</p>
              </div>
              <div className="tab-pane container fade" id="menu1">
                <h4 className="mb-3 text-black mt-3">Additional Information</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu2">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-4 text-black mt-4">
                      1 review for Product Name
                    </h4>
                    <div className="media mb-4">
                      <img
                        src="https://pnecommerce.netlify.app/img/user.jpg"
                        className="john img-fluid mr-3 mt-1"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>
                          John Doe
                          <small>
                            -<i>01 jan 2045</i>
                          </small>
                        </h6>
                        <div className="text-primary mb-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p>
                          Diam amet duo labore stet elitr ea clita ipsum, tempor
                          labore accusam ipsum et no at. Kasd diam tempor rebum
                          magna dolores sed sed eirmod ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-4 text-black">Leave a review</h4>
                    <small>
                      Your email address will not be published. Required fields
                      are marked *
                    </small>
                    <div className="d-flex my-3">
                      <p className="mb-0 mr-2">Your Rating * :</p>
                      <div className="">
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                      </div>
                    </div>
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="">Your Review *</label>
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Your Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          id="name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Your Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name=""
                          id="email"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <input
                          type="submit"
                          value={"Leave Your Review"}
                          className="btn bg-primary shop_cart px-3"
                          name=""
                          id=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

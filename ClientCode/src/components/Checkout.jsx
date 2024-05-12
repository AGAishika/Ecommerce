import React from "react";
import SmallBar from "./Layout/SmallBar";

function Checkout() {
  return (
    <>
      <SmallBar />
      {/* Billing Address code starts here  */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-md-8 mt-3">
            <div className="section-title text-uppercase fw-bold mb-4 mb-3 h5">
              <span className="bg-secondary px-2">Billing Address</span>
            </div>

            <div className="formBack bg-white p-4">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="john"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="john"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Mobile No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+123 456 789"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123 street"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="john"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Country</label>
                  <br />
                  <select
                    name=""
                    className="custom-select bg-white w-100 py-2"
                    id=""
                    style={{ border: "1px solid #ced4da" }}
                  >
                    <option value="" selected>
                      United States
                    </option>
                    <option value="">Afghanistan</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                  </select>
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New York"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New York"
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="fname">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123"
                  />
                </div>

                <div className="col-md-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      id="create"
                      type="checkbox"
                      className="custom-control-input"
                      placeholder="New York"
                    />
                    <label
                      htmlFor="create"
                      className="custom-control-label"
                      data-toggle="collapse"
                      data-target="#shipping-address"
                    >
                      create an account
                    </label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="custom-control custom-checkbox">
                    <input
                      id="shipto"
                      type="checkbox"
                      className="custom-control-input"
                      data-bs-toggle="collapse"
                      data-bs-target="#shipping-address"
                      aria-expanded="false"
                      aria-controls="shipping-address"
                    />
                    <label
                      htmlFor="shipto"
                      className="custom-control-label collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#shipping-address"
                      aria-expanded="false"
                      aria-controls="shipping-address"
                    >
                      Ship to different address
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-5 collapse" id="shipping-address">
              <div className="section-title text-uppercase fw-bold mb-4 mb-3 h5">
                <span className="bg-secondary px-2">Shipping Address</span>
              </div>
              <div className="formBack bg-white p-4">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="john"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="john"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Mobile No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+123 456 789"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123 street"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="john"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Country</label>
                    <br />
                    <select
                      name=""
                      className="custom-select bg-white w-100 py-2"
                      id=""
                      style={{ border: "1px solid #ced4da" }}
                    >
                      <option value="" selected>
                        United States
                      </option>
                      <option value="">Afghanistan</option>
                      <option value="">Albania</option>
                      <option value="">Algeria</option>
                    </select>
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New York"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New York"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="fname">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div className="section-title text-uppercase fw-bold mb-4 mb-3 h5">
              <span className="bg-secondary px-2">ORDER TOTAL</span>
            </div>
            <div className="bg-light p-4">
              <div className="border-bottom">
                <h6 className="mb-3">Products</h6>
                <div className="d-flex justify-content-between">
                  <h6>Product Name 1</h6>
                  <p>$150</p>
                </div>

                <div className="d-flex justify-content-between">
                  <h6>Product Name 2</h6>
                  <p>$150</p>
                </div>

                <div className="d-flex justify-content-between">
                  <h6>Product Name 3</h6>
                  <p>$150</p>
                </div>
              </div>

              <div className="border-bottom">
                <div className="d-flex justify-content-between mt-2">
                  <h6 className="text-dark">Subtotal</h6>
                  <p className="text-dark">$10</p>
                </div>

                <div className="d-flex justify-content-between">
                  <h6 className="text-dark">Shipping</h6>
                  <p className="text-dark">$10</p>
                </div>
              </div>

              <div className="total pt-2">
                <div className="d-flex justify-content-between">
                  <h5 className="text-dark fw-bold">Total</h5>
                  <h5 className="text-dark fw-bold">$160</h5>
                </div>
              </div>
            </div>

            <div className="section-title text-uppercase fw-bold mb-4 mb-3 h5 mt-5">
              <span className="text-dark fw-bold px-2">Payment</span>
            </div>

            <div className="total_box bg-white p-4">
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="paypal"
                    value="Paypal"
                  />
                  <label htmlFor="paypal" className="custom-control-label">
                    Paypal
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="direct"
                    id="direct"
                    value="Direct Check"
                  />
                  <label htmlFor="direct" className="custom-control-label">
                    Direct Check
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="bank"
                    id="bank"
                    value="Bank Transfer"
                  />
                  <label htmlFor="bank" className="custom-control-label">
                    Bank Transfer
                  </label>
                </div>
              </div>
              <button className="btn bg-primary  text-dark fw-bold w-100 p-3 mt-4">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

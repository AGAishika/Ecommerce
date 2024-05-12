import React from "react";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container-fluid bg-dark mt-5 pt-5">
          <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 pe-5">
              <h5 className="text-white mb-4 text-uppercase fw-bold">
                Get In Touch
              </h5>
              <p className="mb-4 text-white justify-content-right">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor. Rebum tempor no vero est magna amet no
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                123 Street, New York, USA
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-envelope text-primary me-2"></i>
                info@example.com
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-phone text-primary me-2"></i>
                +012 345 67890
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <h5 className="text-white mb-4 text-uppercase fw-bold mt-3 mt-md-0">
                    Quick Shop
                  </h5>
                  <div className="d-flex flex-column justify-content-start footer_list">
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Home
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Our Shop
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Shop Detail
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Shopping Cart
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Checkout
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Contact Us
                    </a>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <h5 className="text-white mb-4 text-uppercase fw-bold mt-3 mt-md-0">
                  My Account
                  </h5>
                  <div className="d-flex flex-column justify-content-start footer_list">
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Home
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Our Shop
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Shop Detail
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Shopping Cart
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Checkout
                    </a>
                    <a href="#" className="text-white mb-2">
                      <i className="fa fa-angle-right me-2 text-white"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <h5 className="text-white mb-4 text-uppercase fw-bold">
                    News Letter
                  </h5>
                  <p className="mb-4 text-white justify-content-right">
                    No dolore ipsum accusam no lorem. Invidunt sed clita kasd
                    clita
                  </p>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-append">
                        <button className="btn bg-primary">Sign Up</button>
                      </div>
                    </div>
                  </form>
                  <h6 className="text-white mt-3 text-uppercase mb-3">
                    Follow Us
                  </h6>
                  <div className="d-flex">
                    <a href="#" className="btn bg-primary">
                      <i className="fab fa-twitter foot-color"></i>
                    </a>
                    <a href="#" className="btn bg-primary mx-2">
                      <i className="fab fa-facebook-f foot-color"></i>
                    </a>
                    <a href="#" className="btn bg-primary ">
                      <i className="fab fa-linkedin-in foot-color"></i>
                    </a>
                    <a href="#" className="btn bg-primary mx-2">
                      <i className="fab fa-instagram foot-color"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-xl-5 py-4 border-top">
            <div className="col-md-6 text-md-left text-center">
              <p className="text-white mb-0">
                &#169;{" "}
                <span className="text-primary">PN INFOSYS. PNINFOSYS</span>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <img
                src="https://pnecommerce.netlify.app/img/payments.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* back to top */}
      <a href="#" className="btn bg-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default Footer;

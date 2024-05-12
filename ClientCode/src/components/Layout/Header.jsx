import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

function Header() {

  const {changeIcon , setIcon} = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    alert.success("You are logged out successfully!");
    navigate('/login')
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary topnavbar py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <NavLink to={"/about"} className="text-body mr-3">
                About
              </NavLink>
              <NavLink to={"/contact"} className="text-body mr-3">
                Contact
              </NavLink>
              <NavLink to={"/help"} className="text-body mr-3">
                Help
              </NavLink>
              <NavLink to={"/faqs"} className="text-body mr-3 ">
                FAQs
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 text-lg-right col-12 top-bar">
            <div className="d-inline-flex justify-content-end">
              <div
                className="d-inline-flex align-items-center"
                style={{ gap: "10px" }}
              >
                {user ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      {user && user.name}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            height: "18px",
                            width: "18px",
                            borderRadius: "100%",
                            marginLeft: "20px",
                          }}
                          src={user?.image?.url}
                          className="rounded-circle"
                          alt={user && user.name}
                        />
                        <span className="dropdown-item">
                          {user && user.name}
                        </span>
                      </div>
                      <NavLink className="dropdown-item" to="/profile">
                        Manage Your Profile
                      </NavLink>
                      <NavLink to={'/login'}
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  !loading && (
                    <NavLink className="dropdown-item">
                      Sign in
                    </NavLink>
                  )
                )}
              </div>
              <div className="btn-grp">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  My Account
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <NavLink className="dropdown-item" type="button" to={"/login"}>
                    Sign in
                  </NavLink>
                  <NavLink className="dropdown-item" to="/registration" >  
                    Sign up
                  </NavLink>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              </div>

              <div className="btn-grp mx-lg-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  USD
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    EUR
                  </button>
                  <button className="dropdown-item" type="button">
                    GBP
                  </button>
                  <button className="dropdown-item" type="button">
                    CAD
                  </button>
                </div>
              </div>

              <div className="btn-grp">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  EN
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    FR
                  </button>
                  <button className="dropdown-item" type="button">
                    AR
                  </button>
                  <button className="dropdown-item" type="button">
                    RU
                  </button>
                </div>
              </div>

              <div className="topbar-icons d-block d-lg-none">
                <i className="bi bi-heart-fill ms-2 text-dark"></i>
                <i className="bi bi-0-circle ms-1 text-dark"></i>
                <i className="bi bi-cart-dash-fill ms-2 text-dark"></i>
                <i className="bi bi-0-circle  text-dark"></i>
              </div>
            </div>
          </div>
        </div>
        {/* middleBar  */}
        <div className="middleBar d-none d-lg-block">
          <div className="row align-items-center px-xl-5">
            <div className="col-lg-4">
              <NavLink to className="text-decoration-none">
                <img
                  src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                  alt=""
                  className="logo-height"
                />
              </NavLink>
            </div>
            <div className="col-lg-4 text-left">
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search for products"
                  />
                  <div className="input-group-append">
                    <span className="text-primary input-group-text">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 text-lg-right">
              <p className="customer m-0">Customer Service</p>
              <h5 className="m-0 customer-num">+012 345 6789</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End  */}
      {/* Navbar Start  */}

      <div className="container-fluid bg-dark">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <NavLink
              className="btn d-flex navbar-toggler bg-primary align-items-center justify-content-between"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              style={{ height: "65px", padding: "0 30px" }}
            >
              <h5>
                <i className="fa fa-bars mr-3"></i>
                Categories
              </h5>
              {changeIcon ? (
                <i
                  className="fa-solid fa-chevron-up"
                  onClick={(e) => setIcon(false)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-chevron-down "
                  onClick={(e) => setIcon(true)}
                ></i>
              )}
            </NavLink>
          </div>
          <div className="col-lg-7">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className="navbar-brand d-lg-none d-flex " to="#">
                  <span>
                    <h1 className="fw-bold bg-white px-2 text-black">MULTI</h1>
                  </span>
                  <span>
                    <h1 className="fw-bold text-white bg-primary px-2">SHOP</h1>
                  </span>
                </NavLink>
                <button
                  className="navbar-toggler text-white bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link  text-white"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/shop">
                        Shop
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/shopDetail">
                        Shop Detail
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle text-white pagesOnHover"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                        {/* <i className="fa fa-angle-down mt-1 ms-1 text-white "></i> */}
                      </NavLink>
                      <ul className="dropdown-menu bg-primary">
                        <li>
                          <NavLink
                            className="dropdown-item bg-primary text-black"
                            to="/cart"
                          >
                            Shopping Cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item bg-primary text-black"
                            to="/check"
                          >
                            Checkout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <div className="d-flex align-items-center h-100 justify-content-center">
              <i className="bi bi-heart-fill icon-color"></i>
              <i className="bi bi-0-circle ms-1 text-white"></i>
              <i className="bi bi-cart-dash-fill icon-color ms-4"></i>
              <i className="bi bi-0-circle ms-1 text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={(e) => setIcon(true)}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dresses
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Men's Dresses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Women's Dresses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Baby's Dresses
                    </NavLink>
                  </li>
                </ul>
              </li>
              <NavLink to className="nav-item nav-link">
                shirts
              </NavLink>
              <NavLink to className="nav-item nav-link">
                jeans
              </NavLink>
              <NavLink to className="nav-item nav-link">
                Swimwear
              </NavLink>
              <NavLink to className="nav-item nav-link">
                SleepWear
              </NavLink>
              <NavLink to className="nav-item nav-link">
                SportsWear
              </NavLink>
              <NavLink to className="nav-item nav-link">
                JumpSuit
              </NavLink>
              <NavLink to className="nav-item nav-link">
                Blazers
              </NavLink>
              <NavLink to className="nav-item nav-link">
                Jackets
              </NavLink>
              <NavLink to className="nav-item nav-link">
                Shoes
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

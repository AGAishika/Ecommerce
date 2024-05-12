import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearErrors, loginUser } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    dispatch(loginUser( email, password ));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <>
      <section className="registration_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="registration_box">
                <h1>Login form</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>

                    <button type="submit" className="btn btn-primary">
                      <NavLink to="/registration" className="text-black">
                        Sign up
                      </NavLink>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

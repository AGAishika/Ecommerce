import React, { useEffect, useState } from "react";
import { createUser , clearErrors} from "../../Redux/Action/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setConfirmPassword] = useState();
  const [phone, setPhone] = useState();
  // const [image, setImage] = useState()

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const alert = useAlert();
  

  const handleSubmit = (e) => {
    e.preventDefault(); //helps to prevent the form from refreshing the form

    // console.log(name , email, password, confirmPassword, phone);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("cpassword", cpassword);
    dispatch(createUser(formData));
    // formData.append('image', image)
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      // console.log(dispatch(clearErrors()));
      // dispatch(clearErrors())
    }
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);


  return (
    <>
      <section className="registration_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="registration_box">
                <h1>SIGN UP</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="cpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      autoComplete="off"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      placeholder="+91 87*******7"
                      autoComplete="off"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
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

export default Registration;
// onChange={(e) => setImage(e.target.files[0]}

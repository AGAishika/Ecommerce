import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader";
import MetaData from "../Layout/MetaData";
import { clearErrors, updateUserProfile } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

function Profile() {
  const { user, loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    dispatch(updateUserProfile(formData));
    alert.success("Profile updated successfully");
  };
  return (
    <>
      {/* Modal */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* breadcrumb starts */}
          <MetaData title={"Profile"} />
          <div className="container container-fluid">
            <h2 className="mt-5 ml-5">My Profile</h2>
            <div className="row justify-content-around mt-5 user-info">
              <div className="col-12 col-md-3">
                <figure className="avatar avatar-profile">
                  <img
                    className="rounded-circle img-fluid"
                    src={user?.image?.url}
                    alt=""
                  />
                </figure>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit Profile
                </button>
              </div>

              <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{user?.name}</p>

                <h4>Email Address</h4>
                <p>{user?.email}</p>

                <a href="/orders" className="btn btn-danger btn-block mr-2">
                  My Orders
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Your Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

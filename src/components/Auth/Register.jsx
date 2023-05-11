import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/userServices";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleRegister = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }
    let res = await postRegister(email, username, password);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/login");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <div className="register-container container">
      <div className="register-header">
        <span>Do you already have an account?</span>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div className="register-content">
        <h2 className="title mt-2 mb-4">Register</h2>
        <div className="content">
          <form>
            <div className="form-group mb-3 col-sm-12">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-sm-12 mb-3">
              <label htmlFor="username" className="mb-2">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group  form-group-password col-sm-12 mb-5">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type={isShowPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="icon-show-password"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {password !== "" ? (
                  isShowPassword ? (
                    <AiFillEye />
                  ) : (
                    <AiFillEyeInvisible />
                  )
                ) : (
                  <></>
                )}
              </span>
            </div>
            <button
              type="button"
              className="btn btn-dark mx-auto"
              onClick={() => handleRegister()}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="register-footer mt-5">
        <div className="back-home d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            {"<< Go to Homepage"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

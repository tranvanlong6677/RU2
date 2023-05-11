import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/userServices";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
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

    let res = await postLogin(email, password);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <div className="login-container container">
      <div className="login-header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate("/register")}>Sign up</button>
        <a href="#">Need help?</a>
      </div>
      <div className="login-content">
        <h2 className="title mt-2 mb-4">Typeform</h2>
        <h4 className="hello mb-3">Hello, who's this?</h4>
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
              />
            </div>
            <div className="form-group col-sm-12 mb-2">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#" className="mb-3 d-block">
              Forgot password?
            </a>
            <br />
            <button
              type="button"
              className="btn btn-dark mx-auto"
              onClick={() => handleLogin()}
            >
              Login to Typeform
            </button>
          </form>
        </div>
      </div>
      <div className="login-footer mt-5">
        <div className="back-home d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            {"<< Go to Homepage"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

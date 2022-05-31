import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignLogIn.css";
import axios from "axios";

function SignLogIn() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // for Login
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  // for Sign up
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (user === "" || pwd === "") {
      alert("Please enter email and password");
    } else {
      axios
        .post("https://secret-badlands-53755.herokuapp.com/login", {
          name: user,
          password: pwd,
        })
        .then((res) => {
          if (res.data.error === "wrong password") {
            alert("Incorrect Password");
          } else if (res.data.msg === "Incorrect Email") {
            alert("Incorrect Email");
          } else {
            console.log(res.data);
            setAuth({ user, pwd });
            navigate(from);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Internal Server Error Please Try Again later");
        });
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert("Please complete the Fields");
    } else {
      axios 
        .post("https://secret-badlands-53755.herokuapp.com/signup", {
          name: username,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          alert("Account Created Successfully now you can Log In.");
          setUsername("");
          setEmail("");
          setPassword("");
          navigate(from);
        })
        .catch((err) => {
          console.log(err);
          alert("Internal Server Error Please Try Again later");
        });
    }
  };

  return (
    <div className="container">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-1">
              <div className="section pb-5 pt-5 pt-sm-1 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Log In</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="User Name"
                              autoComplete="on"
                              onChange={(e) => {
                                setUser(e.target.value);
                              }}
                              value={user}
                              required
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-person-circle"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                              onChange={(e) => {
                                setPwd(e.target.value);
                              }}
                              value={pwd}
                              required
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-shield-lock"></i>
                          </div>

                          <button
                            className="btn btn-md btn-outline-light mt-3"
                            onClick={login}
                          >
                            Log In
                          </button>
                          <p className="mb-0 mt-5 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Your Name"
                              autoComplete="on"
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                              value={username}
                              required
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-person-circle"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="on"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                              required
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-envelope"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              value={password}
                              required
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-shield-lock"></i>
                          </div>

                          <button
                            className="btn btn-md btn-outline-light mt-3"
                            onClick={signup}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignLogIn;

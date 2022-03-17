import React,{ useState } from "react";
import "./SignLogIn.css";

function SignLogIn() {

  const [email,setEmail] = useState("")
  const [pwd,setPwd] = useState("")

  var submitfunc = () =>{
    var user = {
      email,
      pwd
    }
    sessionStorage.setItem(user.email,user.pwd);
  }

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
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="on"
                              onChange={(e)=>{setEmail(e.target.value)}}
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
                              onChange={(e)=>{setPwd(e.target.value)}}
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-shield-lock"></i>
                          </div>

                          <button className="btn btn-md btn-outline-light mt-3" onClick={submitfunc}>
                            Submit
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
                              placeholder="Your Full Name"
                              autoComplete="on"
                            />
                            <i className="input-icon bi bi-person-circle"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="on"
                              onChange={(e)=>{setEmail(e.target.value)}}
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
                              onChange={(e)=>{setPwd(e.target.value)}}
                              onFocus={(e) => (e.target.value = "")}
                            />
                            <i className="input-icon bi bi-shield-lock"></i>
                          </div>

                          <button className="btn btn-md btn-outline-light mt-3"  onClick={submitfunc}>
                            Submit
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

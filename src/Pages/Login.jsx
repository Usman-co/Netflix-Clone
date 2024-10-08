import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo_2.png";
import { login, signup } from "../Firebase";

const Login = () => {
  const [isLogin, setLogin] = useState("Sign In");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const user_auth = async (e) => {
    e.preventDefault()
    if(isLogin === "Sign In"){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
  }

  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h2>{isLogin}</h2>
        <form>
          {isLogin === "Sign Up" ? (
            <input value={name} onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input  value={email} onChange={(e)=> {setEmail(e.target.value)}} type="email" placeholder="email" />
          <input  value={password} onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder="password" />
          <button onClick={user_auth} type="submit">{isLogin}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {isLogin === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setLogin("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setLogin("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <div className="auth">
      <div className="login">
        <div className="heading">
          <h2>LOGIN</h2>
        </div>
        <div className="content">
          <div className="emailBox">
            <p className="label">Email Address</p>
            <input type="email" />
          </div>
          <div className="passwordBox">
            <div className="password">
              <p className="pass">Your password</p>
              <p className="lost">Lost password ?</p>
            </div>
            <input type="password" />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
          <div className="create">
            <p>
              Not registered ?{" "}
              <Link to="/auth/register">
                <span>Create Account</span>
              </Link>
            </p>
            <Link to="/">
              <p className="back">or Back to home</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;

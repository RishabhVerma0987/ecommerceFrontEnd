import React, { useEffect } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/auth";
function Register() {
  const dispatch = useDispatch();

  return (
    <div className="auth">
      <div className="register">
        <div className="heading">
          <h2>REGISTER</h2>
        </div>
        <div className="content">
          <div className="emailBox">
            <p className="label">Email Address</p>
            <input type="email" />
          </div>
          <div className="passwordBox">
            <p className="label">Your password</p>
            <input type="password" />
          </div>
          <div className="confirmPasswordBox">
            <p className="label">Confirm password</p>

            <input type="password" />
          </div>
          <div className="submit">
            <button
              onClick={() =>
                dispatch(registerUser("jack", "jack@gmail.com", "alpha098"))
              }
            >
              Submit
            </button>
          </div>
          <div className="create">
            <p>
              Already registered ?{" "}
              <Link to="/auth/login">
                <span>Login</span>
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
export default Register;

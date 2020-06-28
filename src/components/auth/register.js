import React, { useEffect, useState } from "react";
import "./register.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/actions/auth";
function Register() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.authReducer);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, errorSetConfirmPassword] = useState(false);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const checkEmail = () => {
    const regex = /[^@]+@[^\.]+\..+/g;
    const valid = regex.test(email);
    if (valid) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };
  const checkPassword = () => {
    if (password.length >= 6) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  };
  const checkConfirmPassword = () => {
    if (password === confirmPassword) {
      errorSetConfirmPassword(false);
    } else {
      errorSetConfirmPassword(true);
    }
  };
  useEffect(() => {
    if (email || password || confirmPassword !== "") {
      checkEmail();
      checkPassword();
      checkConfirmPassword();
    }
  }, [email, password, confirmPassword]);
  const goRegister = () => {
    if (
      email &&
      password &&
      confirmPassword !== "" &&
      !errorEmail &&
      !errorPassword &&
      !errorConfirmPassword
    ) {
      dispatch(registerUser(email, email, password));
    } else {
      alert("please fill field carefully");
    }
  };
  useEffect(() => {
    if (login !== null && login.sucess === true) {
      history.goBack();
    }
  }, [login]);
  console.log(login);
  return (
    <div className="auth">
      <div className="register">
        <div className="heading">
          <h2>REGISTER</h2>
        </div>
        <div className="content">
          <div className="emailBox">
            <p className="label">Email Address</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errorEmail ? (
              <p
                className="error"
                style={{
                  fontSize: "1.5rem",
                  color: "#cf123c",
                  paddingTop: "0.5rem",
                }}
              >
                email not Valid
              </p>
            ) : null}
          </div>
          <div className="passwordBox">
            <p className="label">Your password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {errorPassword ? (
              <p
                className="error"
                style={{
                  fontSize: "1.5rem",
                  color: "#cf123c",
                  paddingTop: "0.5rem",
                }}
              >
                password length should be more than 6
              </p>
            ) : null}
          </div>
          <div className="confirmPasswordBox">
            <p className="label">Confirm password</p>

            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            {errorConfirmPassword ? (
              <p
                className="error"
                style={{
                  fontSize: "1.5rem",
                  color: "#cf123c",
                  paddingTop: "0.5rem",
                }}
              >
                password does not match
              </p>
            ) : null}
          </div>
          <div className="submit">
            <button onClick={() => goRegister()}>Submit</button>
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

import React, { useState, useEffect } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/auth";
function Auth() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.authReducer);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
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

  useEffect(() => {
    if (email || password !== "") {
      //check email
      checkEmail();
      //check password
      checkPassword();
    }
  }, [email, password]);

  const goLogin = () => {
    setShow(false);
    if (email && password !== "" && !errorEmail && !errorPassword) {
      dispatch(loginUser(email, password));
    } else {
      alert("please fill field carefully");
      setShow(true);
    }
  };

  useEffect(() => {
    if (login !== null && login.sucess === true) {
      history.goBack();
    }
  }, [login]);

  const [show, setShow] = useState(true);

  return (
    <div className="auth">
      <div className="login">
        <div className="heading">
          <h2>LOGIN</h2>
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
                Email not Valid
              </p>
            ) : null}
          </div>
          <div className="passwordBox">
            <div className="password">
              <p className="pass">Your password</p>
              <p className="lost">Lost password ?</p>
            </div>
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
                Password should be more than 6
              </p>
            ) : null}
          </div>
          <div className="submit">
            <button onClick={() => goLogin()}>
              {show ? "Submit" : "Please Wait ..."}
            </button>
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

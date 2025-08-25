import { useState } from "react";
import "./InputStyle.css";
const User_details = () => {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   Eye state
  const [seeEye, setSeeEye] = useState(false);
  const [C_seeEye, setCeye] = useState(true);
  const handleSubmit = () => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      userName,
      password,
      confirmPassword
    );
  };
  return (
    <div className="input_body">
      <div className="input_wrapper">
        <header>
          <h1>Sign Up</h1>
          <p>
            Already a member? <span>Log in</span>
          </p>
        </header>
        <div className="input">
          <form
            action=" 
                "
            className="form_input"
          >
            <input
              type="text"
              value={firstName}
              onChange={(e) => SetFirstName(e.target.value)}
              placeholder="firstName"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => SetLastName(e.target.value)}
              placeholder="lastName"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            <div className="input_pass">
              <input
                type={seeEye ? "text" : "password"}
                value={password}
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                <div>
                  {seeEye ? (
                    <i
                      class="fa-solid fa-eye"
                      onClick={() => setSeeEye(!seeEye)}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-eye-slash"
                      onClick={() => setSeeEye(!seeEye)}
                    ></i>
                  )}
                </div>
              }
            </div>

            <div className="input_con">
              <input
                type={C_seeEye ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="con_password"
              />
              <div>
                {C_seeEye ? (
                  <i
                    class="fa-solid fa-eye"
                    onClick={() => setCeye(!C_seeEye)}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-eye-slash"
                    onClick={() => setCeye(!C_seeEye)}
                  ></i>
                )}
              </div>
            </div>
          </form>
          <button className="sign_up" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default User_details;

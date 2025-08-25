import { useState } from "react";
import "./LoginStyle.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seeEye, setSeeEye] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container">
      <h2>LOGIN IN</h2>
      <span>Don't have an account?</span>
      <form className="form_container">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <div className="pass">
          <input
            type={seeEye ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <div>
            {seeEye ? (
              <i class="fa-solid fa-eye" onClick={() => setSeeEye(!seeEye)}></i>
            ) : (
              <i
                class="fa-solid fa-eye-slash"
                onClick={() => setSeeEye(!seeEye)}
              ></i>
            )}
          </div>
        </div>
        <button className="login" onClick={handleSubmit}>
          Login In
        </button>
      </form>
    </div>
  );
};
export default Login;

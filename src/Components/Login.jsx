import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./LoginStyle.css";
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seeEye, setSeeEye] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if(email && password){
      navigate('/home')
    } else{
      alert("Please fill all fields")
    }
  };
  const style ={
    color: "lightGrey",
    textDecoration: "none",
    cursor: "pointer"
    
  }

  return (
    <div className="container">
      <h2>LOGIN IN</h2>
      <NavLink 
      style={style}
      to={'/sign-up'}>Don't have an account?</NavLink>
      <form className="form_container" onSubmit={handleSubmit}>
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
        <button className="login" type="submit">
         submit
        </button>
      </form>
      <div>
        <NavLink style={style} to={'/forget-password'}>Forgot Password?</NavLink>
      </div>
    </div>
  );
};
export default Login;

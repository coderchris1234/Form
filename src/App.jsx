import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User_details from "./Components/Input";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import ForgotPass from "./Components/ForgotPass"
import Error from "./Components/Error";
import HomePage from "./Components/HomePage";




function App() {
  return(
    <Router>
      <Routes>
        <Route path="/sign-up" element={<User_details />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/forget-password" element={<ForgotPass />}/>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <div>
        <h1 style={{
          color: "white",
          textAlign: "center"
        }}>Created with love 💝 By Christobel</h1>
      </div>
    </Router>
  ) 
}

export default App;

// <User_details />
      // <Login />

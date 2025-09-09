import { NavLink } from "react-router-dom"
function Welcome() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "lightGrey",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            fontFamily: "sans-serif"
        }}>
            <h1 style={{
                fontStyle: "italic"
            }}>Welcome To  My Router learning phrase</h1>
            <p style={{
                fontSize: "20px"
            }}>kindly sign up or login</p>
            <NavLink to={'/sign-up'}
            style={{
                textDecoration: "none",
                backgroundColor: "white",
                padding: "8px",
                color: "black",
                borderRadius: "5px"
            }}
            >Sign up</NavLink>
            <NavLink 
                style={{
                textDecoration: "none",
                backgroundColor: "black",
                padding: "8px",
                color: "white",
                borderRadius: "5px",
            }}
            to={'/login'}>Login</NavLink>
        </div>
    )
}

export default Welcome

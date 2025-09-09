import { NavLink } from "react-router-dom"

function Error() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "sans-serif"
        }}>
            <h1 style={{
                marginBottom: "20px"
            }}>Road Block🚧🛑🚫🤚</h1>
            <p>I guess you are lost 😵  I can easily re-direct you back to the
                <NavLink 
                style={{
                    textDecoration: "none",
                    backgroundColor: "blue",
                    padding: "5px",
                    borderRadius: "8PX",
                    marginLeft: "10px",
                    color: "white"
                }}
                to={'/home'}>Home page</NavLink></p>
        </div>
    )
}

export default Error

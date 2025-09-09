import { NavLink } from "react-router-dom"
function Welcome() {
    return (
        <div>
            <h1>Welcome My brother</h1>
            <p>kindly sign up or login</p>
            <NavLink to={'/sign-up'}>Sign up</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    )
}

export default Welcome

import { NavLink } from "react-router-dom"

function Error() {
    return (
        <div>
            I guess you are lost linkly fly back to the  <NavLink to={'/home'}>Home page</NavLink>
        </div>
    )
}

export default Error

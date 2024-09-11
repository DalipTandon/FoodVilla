import Logo from "../assets/img/Logo.webp";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Title=()=>{
    return(
    <a href="/">
        <img className="logo" alt="logo" src={Logo}></img>
    </a>
    );
}
const Header=()=>{
    const[loggedin,setLoggedin]=useState(true);
    const navigate=useNavigate();
    const handleLoginLogout = () => {
        if (loggedin) {
            setLoggedin(false); // Set logged in to false (logout)
            navigate("/login");  // Navigate to login page
        } else {
            setLoggedin(true);  // Set logged in to true (login)
        }
    };
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
              <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/help">Help</Link></li>
                <li><i className="ri-shopping-cart-2-line"></i></li>
            </ul>
            {!loggedin ? (
                <button className="log-out" onClick={handleLoginLogout}> Logout</button>
            ) :(
                <button className="log-in" onClick={handleLoginLogout}>Login</button>
            )
            }
        </div>
        </div>
    );
};
export default Header;
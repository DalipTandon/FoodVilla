import Logo from "../assets/img/Logo.webp";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
export const Title=()=>{
    return(
    <a href="/">
        <img className="logo" alt="logo" src={Logo}></img>
    </a>
    );
}
const Header=()=>{
    const[loggedin,setLoggedin]=useState(false);
    const isOnline=useOnline();
    const navigate=useNavigate();
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
                <button className="log-out" onClick={setLoggedin(true)}> Logout   <span
                className={isOnline ? "login-btn-green" : "login-btn-red"}
              >
                {" "}
                ●
              </span></button>
            ) :(
                <button className="log-in" onClick={()=>navigate("/login")}>Login  <span
                className={isOnline ? "login-btn-green" : "login-btn-red"}
              >
                {" "}
                ●
              </span></button>
            )
            }
        </div>
        </div>
    );
};
export default Header;
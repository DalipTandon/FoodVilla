import Logo from "../assets/img/Logo.webp";
import {Link} from "react-router-dom";
import { useState } from "react";
export const Title=()=>{
    return(
    <a href="/">
        <img className="logo" alt="logo" src={Logo}></img>
    </a>
    );
}
const Header=()=>{
    const[loggedin,setLoggedin]=useState(false);
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
              <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link></li>
                <li><i className="ri-shopping-cart-2-line"></i></li>
            </ul>
            {loggedin ? (
                <button className="log-in" onClick={()=>setLoggedin(false)}>
                    Logout
                </button>
            ) :(
                <button className="log-out" onClick={()=>setLoggedin(true)}>Login</button>
            )
            }
        </div>
        </div>
    );
};
export default Header;
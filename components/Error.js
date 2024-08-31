import Error from "../assets/img/Error.jpg";
import {Link} from "react-router-dom"
const ErrorPage=()=>{
    return (
        <div className="error-div">
            <img src={Error}/>
            <h3>Oops! The restaurant you're looking for can't be found.</h3>
            <h4>Error: No route matches URL "/contact/field"</h4>
           <Link to="/"> <button>Back Home</button></Link>
        </div>
    )
}

export default ErrorPage;
import Logo from "../assets/img/Logo.webp";

export const Title=()=>{
    return(
    <a href="/">
        <img className="logo" alt="logo" src={Logo}></img>
    </a>
    );
}
const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li><i className="ri-shopping-cart-2-line"></i></li>
            </ul>
        </div>
        </div>
    );
};
export default Header;
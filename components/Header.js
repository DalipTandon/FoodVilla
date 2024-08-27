export const Title=()=>{
    return(
    <a href="/">
        <img className="logo" alt="logo" src="https://logopond.com/logos/a05c97b4573ed3bc95c918febb69b6d9.png"></img>
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
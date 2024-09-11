import BurgerImage from "../assets/img/burger-image.png";
const About=()=>{
    return(
        <div className="about-container">
            <div className="about-left-half">
            <h1>Welcome to <br/>
            The world of <br/>
            <span className="about-span">
                Tasty & Fresh Food
              </span>
              </h1>
              <h2>
          "Straight out of the kitchen to your doorstep"
        </h2>            
        </div>
            <div className="about-right-half">
            <img  src={BurgerImage} alt="BurgerImage"/>
            </div>
        </div>
    );
}
export default About;
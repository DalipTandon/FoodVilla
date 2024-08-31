import ContactImg from "../assets/img/Contact.png"
import {useState} from "react";
const Contact=()=>{
    const[message,setMessage]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact-div">
            <div className="contact-div-left">
                <img src={ContactImg} alt="contact image"/>
            </div>
            <div className="contact-div-right">
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                   <textarea placeholder="Type your message here....."required></textarea>
                   <button>Submit</button>
                   {message && <span className="submit-message">Thanks for contacting Fooies, We will reply ASAP.</span>}
                </form>
            </div>
        </div>
    );
};
export default Contact;
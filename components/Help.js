import { useState } from "react";

const Section=({title,Description})=>{
    const[isVisible,setVisible]=useState(false);
    return(
        <>
        <div className="section-div"> 
            <h3 className="help-title">{title}</h3>
            {isVisible ?
             (<button className="help-button" onClick={()=>setVisible(false)} >Hide</button>):
            ( <button className="help-button" onClick={()=>setVisible(true)} >Show</button>)
            }
              </div>
           <div className="help-description">
           {isVisible && 
           <h3 className="help-description">{Description}</h3>
           }</div>
      </>
    )
};


const Help=()=>{
    return(
        <div className="help-container">
            <h3 className="help-text">We are here to answer all <br/> your questions</h3>
            <div className="help-div">
            <div className="main-div ">  
               <Section title={"How can we Contact Foodies?"} 
               Description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}/>
               <Section title={"How can we get refund?"} 
               Description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}/>
               <Section title={"can i edit my order?"} 
               Description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}/>
               <Section title={"is there a minimum order value?"} 
               Description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
               <Section title={"Do you charge for delivery?"} 
               Description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}/>
            </div>
            </div>
        </div>
    )
}

export default Help;
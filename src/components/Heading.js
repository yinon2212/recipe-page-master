import React from "react";
import '../css/Heading.css';



const Heading = (props) => {
    return (
        <p className={`heading ${props.classes}`}>{props.text}</p>
    );
}


export default Heading;
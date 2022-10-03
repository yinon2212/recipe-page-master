import React from "react";
import Text from "./Text";
import '../css/Instruction.css';

const Instruction = (props) => {
    return (
        <div className="instruction" key={props.id}>
            <div className="number">
                <Text
                    classes="white large"
                    text={props.number}
                />
            </div>
            <div className="instruction-txt">
                <Text
                    classes="bold"
                    text={props.bold}
                />
                <Text
                    classes=""
                    text={props.instrcutionText}
                />
            </div>
        </div>
    )
}

export default Instruction;
import React from "react";
import Text from "./Text";
import '../css/SummaryRow.css';

const SummaryRow = (props) => {
    return (
        <div className="summary-row">
            <i className={`${props.iconName} ${props.summaryTxtClr}`}></i>
            <div className="summary-text">
                <Text
                    classes="gray small top"
                    text={props.top}
                />

                <Text
                    classes={props.summaryTxtClr}
                    text={props.summaryTxt}
                />
            </div>
        </div>
    );
}

export default SummaryRow;

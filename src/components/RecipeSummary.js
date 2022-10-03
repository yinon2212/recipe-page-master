import React from "react";
import SummaryRow from "./SummaryRow";
import '../css/RecipeSummary.css';

const RecipeSummary = (props) => {
    return (
        <div className="recipe-summary">
            <SummaryRow
                iconName="fas fa-users"
                top="yields"
                summaryTxt={props.yieldsTxt}
                summaryTxtClr="orange"
            />
            <SummaryRow
                iconName="far fa-clock"
                top="prep time"
                summaryTxt={props.prepTime}
                summaryTxtClr="summary-txt"
            />
            <SummaryRow
                iconName="far fa-clock"
                top="cook time"
                summaryTxt={props.cookTime}
                summaryTxtClr="summary-txt"
            />
            <SummaryRow
                iconName="far fa-clock"
                top="total time"
                summaryTxt={props.totalTime}
                summaryTxtClr="summary-txt"
            />
        </div>
    );
}

export default RecipeSummary;
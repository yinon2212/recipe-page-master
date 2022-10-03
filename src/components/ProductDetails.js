import React from "react";
import Text from "./Text";
import '../css/ProductDetails.css';

const ProductDetails = (props) => {
    return (
        <div key={props.id} className="product-details">
            <input type="checkbox" className="product-complete" />
            <Text 
                classes=""
                text={`${props.quantity} ${props.product} ${props.extra}`}
            />
        </div>
    );
}

export default ProductDetails;
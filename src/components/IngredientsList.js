import React from "react";
import ProductDetails from "./ProductDetails";
import Text from "./Text";
import '../css/IngredientsList.css';

const generateProductDetails = ((id, product) => {
    return (
        <ProductDetails
            id={id}
            quantity={product.quantity}
            product={product.productName}
            extra={product.extra}
        />
    )
})

const IngredientsList = (props) => {
    const ingredientsList = props.productsDetails.map((product, id) => {
        return generateProductDetails(id, product )
    });

    return (
        <div key={props.id} className="ingredients-list">
            <Text 
                classes="topic"
                text={props.topic} 
            />

            {
                ingredientsList
            }
        </div>
    );
}

export default IngredientsList;
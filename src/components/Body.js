import React from "react";
import Heading from "./Heading";
import IngredientsList from './IngredientsList';
import Instruction from "./Instruction";
import RecipeSummary from "./RecipeSummary";
import '../css/Body.css';


const ingredients = [
    {
        topic: "Graham Cracker Crust",
        productDetails: [
            {
                quantity: "1 and 1/2 cups (150g)",
                productName: "graham cracker crumbs",
                extra: "(about 10 full sheet graham crackers)"
            },
            {
                quantity: "5 Tablespoons (70g) ",
                productName: "unsalted butter",
                extra: ", melted"
            },
            {
                quantity: "1/4 cup (50g)",
                productName: "granulated sugar",
                extra: ""
            }
        ]
    },
    {
        topic: "Cheesecake",
        productDetails: [
            {
                quantity: "four 8-ounce blocks (904g) full-fat",
                productName: "cream cheese",
                extra: ", softened to room temperature"
            },
            {
                quantity: "1 cup (200g) ",
                productName: "granulated sugar",
                extra: ""
            },
            {
                quantity: "1 cup (240g) full-fat ",
                productName: "sour cream",
                extra: ", at room temperature"
            },
            {
                quantity: "1 teaspoon ",
                productName: "pure vanilla extract",
                extra: ""
            },
            {
                quantity: "2 teaspoons ",
                productName: "fresh lemon juice",
                extra: " (optional, but recommended)"
            }
            ,
            {
                quantity: "3 large ",
                productName: "eggs",
                extra: ", at room temperature"
            }
            ,
            {
                quantity: "",
                productName: "",
                extra: "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)"
            }
        ]
    }
];


const instructions = [
    {
        bold: "",
        instrcutionText: "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C)."
    },
    {
        bold: "Make the crust:",
        instrcutionText: "Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling."
    },
    {
        bold: "Make the filling:",
        instrcutionText: "Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can."
    },
    {
        bold: "Prepare the simple water bath (see note)",
        instrcutionText: "Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)"
    },
    {
        bold: "",
        instrcutionText: "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight."
    },
    {
        bold: "",
        instrcutionText: "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice."
    },
    {
        bold: "",
        instrcutionText: "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days."
    }
]

const Body = () => {
    const ingredientsLists = ingredients.map((ingredient, id) => {
        return <IngredientsList id={id} topic={ingredient.topic} productsDetails={ingredient.productDetails} />
    });

    const instructionsList = instructions.map((instruction, index) => {
        return <Instruction id={index} number={index + 1} bold={instruction.bold} instrcutionText={instruction.instrcutionText} />
    })

    return (
        <div className="body">
            <img className="recipe-img" src={require('../res/photo1.png')} alt="food" />
            <div className="recipe-details">
                <div className="recipe-instructions">
                    <div className="lists">
                        <div className="list ingredients">
                            <Heading 
                                classes="small"
                                text="Ingredients"
                            />
                            {ingredientsLists}
                        </div>
                        <div className="list instructions">
                            <Heading 
                                classes="small"
                                text="Instructions"
                            />
                            {instructionsList}
                        </div>
                    </div>

                    <RecipeSummary
                        yieldsTxt="12 servings"
                        prepTime="45 minutes"
                        cookTime="1 hour"
                        totalTime="7,75 hours"
                    />

                </div>


            </div>
        </div>
    );
}

export default Body;
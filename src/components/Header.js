import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import '../css/Header.css';

const Header = () => {
    return (
        <div className="header">
            <Heading 
                classes="large"
                text="Classic Cheesecake Recipe"
            />

            <Text
                classes=""
                text="Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath."
            />
        </div>
    );
}

export default Header;
import React from "react";
import { Container, Image } from "react-bootstrap";

import "../scss/components/imageText.scss";
const ImageText: React.FC = () => {
    return (
        <div className="component-image-text">
            <Image
                src="./images/landing-page/home_wall.webp"
                height={650}
                width={`100%`}
                className="object-fit-cover image"
            />
            <div className="bg-white py-4 px-4 rounded text w-75">
                <h6 className="text-center opacity-50 subheader mb-4">
                    AIL-IN-ONE PLATFORM
                </h6>
                <h1 className="text-center header">
                    50+ Hours Saved, Millions Reached: 
                    <span className="text-color-violet">Automate </span>{" "}
                    Images, Text, Ads
                </h1>
                <p className="text-center">---------------------</p>
            </div>
        </div>
    );
};

export default ImageText;

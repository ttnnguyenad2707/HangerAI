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
            <div className="bg-white py-4 px-4 rounded text w-50">
                <h6 className="text-center opacity-50 subheader mb-4">
                    VALUE DELIVERED
                </h6>
                <h1 className="text-center header">
                    Create 10x more{" "}
                    <span className="text-color-violet">personalized</span>{" "}
                    content faster
                </h1>
            </div>
        </div>
    );
};

export default ImageText;

import React from "react";
import { Form, Image } from "react-bootstrap";

import "../scss/components/contactHome.scss";
const ContactHome: React.FC = () => {
    return (
        <div className="component-contact-home">
            <Image
                src="./images/landing-page/home_wall.webp"
                height={650}
                width={`100%`}
                className="object-fit-cover image"
            />
            <div className="bg-white py-4 px-4 text w-50 rounded">
                <h1 className="text-center header">Ready to get started?</h1>
                <h6 className="text-center opacity-50 subheader mb-4">
                    We are excited to show you Typeface. Sign up now.
                </h6>
                <div className="form">
                    <Form.Control
                        type="email"
                        placeholder="Enter Your Email ... "
                    />
                    <button className="button-primary d-flex">
                        <i className="bi bi-send-plus"></i>
                        <span className="ms-2">Send</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;

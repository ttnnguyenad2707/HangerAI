"use client";
import React from "react";
import { Form, Image } from "react-bootstrap";

import "../scss/components/contactHome.scss";
import Link from "next/link";
const ContactHome: React.FC = () => {
    return (
        <div className="component-contact-home rounded-5">
            <div className="py-4 px-4 text w-50 ">
                <h1 className="fs-0 text-center header mb-4">
                    Get Started Now !
                </h1>
                <h6 className="fs-6 text-center opacity-50 subheader mb-4">
                    Sign up now to improve your customer support with our tools
                    and solutions.
                </h6>
                <div className="d-flex gap-3 justify-content-center">
                    <button className="button-primary">Get Started</button>
                    <Link href="/pricing" className="button-secondary">
                        View pricing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;

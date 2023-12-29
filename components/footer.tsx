import Link from "next/link";
import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";

import "../scss/components/footer.scss";

const founder = {
    contact: {
        facebook: "https://www.facebook.com/",
    },
};

const Footer: React.FC = () => {
    return (
        <div>
            <div className="component-footer py-5">
                <Container>
                    <div className="d-flex justify-content-between">
                        <div style={{ width: "35%" }} className="pe-3">
                            <div className="logo">
                                <div className="d-flex flex-column gap-3">
                                    <div className="logo-brand d-flex gap-2 align-items-center">
                                        <Image
                                            src="/images/logo/logo-hanger.png"
                                            height={`100%`}
                                            width={60}
                                        />
                                        <span className="fs-4 fw-bolder">
                                            HangerAI
                                        </span>
                                    </div>
                                    <div className="about-us">
                                        <p className="fs-6 mb-3">
                                            Our AI tools simplify product
                                            photoshoots, optimize text
                                            extraction, and help your business
                                            build a professional-looking image
                                            system.
                                        </p>
                                    </div>
                                    <div className="d-flex list-contact gap-4">
                                        <Link
                                            href={founder.contact.facebook}
                                            target="_blank"
                                            className="contact-item fs-3"
                                        >
                                            <i className="bi bi-facebook"></i>
                                        </Link>

                                        <Link
                                            href={founder.contact.facebook}
                                            target="_blank"
                                            className="contact-item fs-3"
                                        >
                                            <i className="bi bi-linkedin"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-4 fw-bolder mb-3">
                                        Product
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="product-item">
                                            <Link href="/">
                                                Visual Dressing Room
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                AI Photoshoots Studio Design
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                AI Content Writing
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-4 fw-bolder mb-3">
                                        Tools
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="product-item">
                                            <Link href="/">Virtual Try-on</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Upscale Image</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                AI Background Generator
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Image Recolor</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                Image Inpainting
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Magic Eraser</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                AI Product Description
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                Product Tagging
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Website/SEO</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Communications</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                Social Media Marketing
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-4 fw-bolder mb-3">
                                        Company
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="product-item">
                                            <Link href="/">About Us</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Pricing</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Contact Us</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">FAQs</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="container copyright text-center opacity-50 py-4 border-top border-2">
                Copyright © 2023 HangerAI.
            </div>
        </div>
    );
};

export default Footer;

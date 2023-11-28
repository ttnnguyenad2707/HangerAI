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
                    <Row className="gap-3 gap-md-0">
                        <Col md={3}>
                            <div className="logo">
                                <div className="d-flex flex-column gap-3">
                                    <div className="logo-brand d-flex gap-2 align-items-center">
                                        <Image
                                            src="./images/logo/logo-hanger.png"
                                            height={`100%`}
                                            width={60}
                                        />
                                        <span className="fs-3 fw-bolder">
                                            HangerAI
                                        </span>
                                    </div>
                                    <div className="about-us">
                                        <p>
                                            The enterprise-grade generative AI
                                            app that empowers everyone to
                                            express their unique imagination.
                                        </p>
                                    </div>
                                    <div className="address d-flex flex-column gap-3">
                                        <div className="address-item d-flex gap-3">
                                            <i className="bi bi-geo-alt text-danger"></i>
                                            <span>
                                                53 Dịch Vọng, Cầu Giấy, Hà Nội
                                            </span>
                                        </div>
                                        <div className="address-item d-flex gap-3">
                                            <i className="bi bi-telephone text-success"></i>
                                            <span>0943895292</span>
                                        </div>
                                        <div className="address-item d-flex gap-3">
                                            <i className="bi bi-envelope text-danger-emphasis"></i>
                                            <span>
                                                trantrungnguyenad@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-2 fw-bolder mb-3">
                                        Product
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="product-item">
                                            <Link href="/">
                                                OutFit Recommendation
                                            </Link>
                                        </div>
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
                                                Product Content Generative
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-2 fw-bolder mb-3">
                                        About Us
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="product-item">
                                            <Link href="/">Story</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Values</Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">
                                                HangerAI journey
                                            </Link>
                                        </div>
                                        <div className="product-item">
                                            <Link href="/">Careers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product">
                                <div className="d-flex flex-column gap-3">
                                    <div className="fs-2 fw-bolder mb-3">
                                        Contact
                                    </div>
                                    <div className="product-list d-flex flex-column gap-4">
                                        <div className="d-flex gap-1 flex-column">
                                            <p className="opacity-75">
                                                Send email for more information
                                            </p>
                                            <div className="d-flex gap-3">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email ... "
                                                ></Form.Control>
                                                <button className="button-primary d-flex">
                                                    <i className="bi bi-send-plus"></i>
                                                    <span className="ms-2">
                                                        Send
                                                    </span>
                                                </button>
                                            </div>
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
                                                <i className="bi bi-instagram"></i>
                                            </Link>
                                            <Link
                                                href={founder.contact.facebook}
                                                target="_blank"
                                                className="contact-item fs-3"
                                            >
                                                <i className="bi bi-twitter"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright text-center opacity-50">
                Copyright © 2023 HangerAI.
            </div>
        </div>
    );
};

export default Footer;

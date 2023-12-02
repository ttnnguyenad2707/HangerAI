"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image, Stack } from "react-bootstrap";

import "../scss/components/header.scss";
import useSticky from "@/hooks/useSticky";
const Header: React.FC = () => {
    const { sticky } = useSticky();
    return (
        <div className={`${sticky ? "sticky-menu" : ""} bg-white`}>
            <Container>
                <Navbar expand="lg" className="bg-body ">
                    <Navbar.Brand
                        href="/"
                        className="fs-5 fw-bolder me-5 d-flex align-items-center"
                    >
                        <Image
                            src="/images/logo/logo-hanger.png"
                            height="100%"
                            width="40px"
                            className="me-2"
                        />
                        HangersAI
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="gap-3">
                            <NavDropdown
                                autoClose="outside"
                                align="start"
                                title="Product"
                                className="fs-6 fw-bolder cs-nav-item"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/product/product-tagging">
                                    <Stack
                                        className="py-2"
                                        direction="horizontal"
                                        gap={4}
                                    >
                                        <Image src="/images/landing-page/image_studio_icon.svg"></Image>
                                        <div className="content-product-nav">
                                            <div className="fs-6 fw-normal product-nav-title">
                                                Product tagging
                                            </div>
                                            <div className="fw-light fs-6">
                                                Product tagging
                                            </div>
                                        </div>
                                    </Stack>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/visual-dressing-room">
                                    <Stack
                                        className="py-2"
                                        direction="horizontal"
                                        gap={4}
                                    >
                                        <Image src="/images/landing-page/image_studio_icon.svg"></Image>
                                        <div className="content-product-nav">
                                            <div className="fs-6 fw-normal product-nav-title">
                                                visual-dressing-room
                                            </div>
                                            <div className="fw-light fs-6">
                                                visual-dressing-room
                                            </div>
                                        </div>
                                    </Stack>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/outfit-recommendation">
                                    <Stack
                                        className="py-2"
                                        direction="horizontal"
                                        gap={4}
                                    >
                                        <Image src="/images/landing-page/image_studio_icon.svg"></Image>
                                        <div className="content-product-nav">
                                            <div className="fs-6 fw-normal product-nav-title">
                                                OutFit Recommendation
                                            </div>
                                            <div className="fw-light fs-6">
                                                OutFit Recommendation
                                            </div>
                                        </div>
                                    </Stack>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/ai-photoshoots-studio-design">
                                    <Stack
                                        className="py-2"
                                        direction="horizontal"
                                        gap={4}
                                    >
                                        <Image src="/images/landing-page/image_studio_icon.svg"></Image>
                                        <div className="content-product-nav">
                                            <div className="fs-6 fw-normal product-nav-title">
                                                ai-photoshoots-studio-design
                                            </div>
                                            <div className="fw-light fs-6">
                                                ai-photoshoots-studio-design
                                            </div>
                                        </div>
                                    </Stack>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link
                                href="#about-me"
                                className="cs-nav-item fs-6 fw-bolder "
                            >
                                Company
                            </Nav.Link>
                            <Nav.Link
                                href="/help"
                                className="cs-nav-item fs-6 fw-bolder "
                            >
                                Pricing
                            </Nav.Link>
                            <Nav.Link
                                href="/contact"
                                className="fs-6 fw-bolder cs-nav-item"
                            >
                                Contact us
                            </Nav.Link>
                        </Nav>
                        <div className="ms-auto">
                            <button className="button-secondary">
                                <i className="bi bi-box-arrow-in-right"></i>
                                <span className="ms-2">Login</span>
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;

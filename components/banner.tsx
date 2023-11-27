import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const Banner: React.FC = () => {
    return (
        <React.Fragment>
            <Container className="py-5">
                <Row>
                    <Col md={5} className="order-1 order-md-0">
                        <Stack
                            direction="vertical"
                            className="justify-content-center h-100 gap-3"
                        >
                            <h2 className="fw-bolder fs-0">
                                Supercharge <br></br>your NFT Adventure
                            </h2>
                            <p className="fs-5 fw-medium opacity-50">
                                Find the right NFT collections to buy within the
                                platform.
                            </p>
                            <button
                                className="flex-grow-0 button-primary"
                                style={{ width: "fit-content" }}
                            >
                                <span className="me-2">View in HangerAI</span>
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </Stack>
                    </Col>
                    <Col>
                        <Image
                            src="./images/landing-page/banner.png"
                            width="100%"
                        ></Image>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Banner;

import React, { useState } from "react";
import { Container, Modal, Stack } from "react-bootstrap";

import "../scss/components/modalVideo.scss";

const ContentCol: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Container className="my-5">
                <Stack
                    direction="vertical"
                    gap={3}
                    className="align-items-center"
                >
                    <h1 className="fs-0">
                        <span className="text-color-violet">Anything </span>
                        Imagined
                    </h1>
                    <p>
                        The generative AI app to supercharge personalized
                        content creation for work
                    </p>
                    <Stack
                        direction="horizontal"
                        gap={4}
                        className="justify-content-center"
                    >
                        <button className="button-primary">
                            <span className="me-2">Join waitlist</span>
                            <i className="bi bi-arrow-right-short"></i>
                        </button>
                        <button
                            className="button-secondary"
                            onClick={handleShow}
                        >
                            <i className="bi bi-play-circle-fill"></i>
                            <span className="ms-2">Play Video</span>
                        </button>
                    </Stack>

                    <div>
                        <iframe
                            title="YouTube Video"
                            width="560"
                            height="315"
                            src={`https://www.youtube-nocookie.com/embed/F5tS5m86bOI?autoplay=1&loop=1&playlist=F5tS5m86bOI&controls=0&rel=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Stack>
            </Container>
            <Modal show={show} onHide={handleClose} className="custom-modal">
                <span className="custom-modal-close" onClick={handleClose}>
                    <i className="bi bi-x-circle"></i>
                </span>
                <Modal.Body className="p-0">
                    <div className="embed-responsive embed-responsive-16by9 w-100 h-100 d-flex">
                        <iframe
                            className="embed-responsive-item w-100 h-100"
                            src="https://www.youtube.com/embed/F5tS5m86bOI?autoplay=1&rel=0"
                            allowFullScreen
                            title="Video title"
                            allow="autoplay"
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default ContentCol;

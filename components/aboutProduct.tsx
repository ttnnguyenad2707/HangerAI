import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import "../scss/components/aboutProduct.scss";

interface AboutProduct {
    title: string;
    videoId: string;
}

const aboutProducts: AboutProduct[] = [
    { title: "Image", videoId: "F5tS5m86bOI" },
    { title: "Copy", videoId: "F5tS5m86bOI" },
    { title: "Blog Post", videoId: "F5tS5m86bOI" },
    { title: "Instagram Ad", videoId: "F5tS5m86bOI" },
    { title: "Lading Page", videoId: "F5tS5m86bOI" },
    { title: "Job Post", videoId: "F5tS5m86bOI" },
];

interface AboutProductProps {
    subheader: string;
    header: string;
    description: string;
    template: number;
    background: boolean;
}

const AboutProduct: React.FC<AboutProductProps> = (props) => {
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedItem(
                (prevItem) => (prevItem + 1) % aboutProducts.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div
            className={`${
                props.background === true ? "background-f1f1f2" : ""
            } `}
        >
            <Container className="py-5 w-50">
                <Stack
                    direction="vertical"
                    gap={3}
                    className="align-items-center"
                >
                    <p
                        className="text-color-violet fs-6 m-0"
                        style={{ letterSpacing: "6.4px" }}
                    >
                        {props.subheader}
                    </p>
                    <h2 className="fs-1  text-center">{props.header}</h2>
                    <div
                        className={`aboutProduct-gird template-grid-${props.template} pt-4`}
                    >
                        <Stack
                            direction="vertical"
                            className="about-product-title-box"
                            gap={2}
                        >
                            {aboutProducts.map((about, index) => (
                                <div
                                    key={index}
                                    className={`fs-4 opacity-50 title-about-product ${
                                        index === selectedItem
                                            ? "opacity-100"
                                            : ""
                                    }`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <span className="me-2">{about.title}</span>
                                    <i
                                        className={`bi bi-arrow-right ${
                                            index === selectedItem
                                                ? ""
                                                : "d-none"
                                        }`}
                                    ></i>
                                </div>
                            ))}

                            <p className="mt-3">{props.description}</p>
                            <button className="button-primary">
                                <span className="me-2">Learn more</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </Stack>
                        <div className="w-100 h-100 about-product-video-box">
                            <iframe
                                className="w-100 h-100"
                                title="YouTube Video"
                                src={`https://www.youtube-nocookie.com/embed/F5tS5m86bOI?autoplay=1&loop=1&playlist=F5tS5m86bOI&controls=0&rel=0`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Stack>
            </Container>
        </div>
    );
};

export default AboutProduct;

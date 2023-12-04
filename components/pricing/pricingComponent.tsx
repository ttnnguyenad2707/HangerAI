import { Col, Container, Row } from "react-bootstrap";

interface Pricing {
    type: string;
    pricePerMonth: number;
    description: string;
    character: string[];
}

const PricingList: Pricing[] = [
    {
        type: "Lite",
        pricePerMonth: 19,
        description: "Up to 5 shared spaces",
        character: [
            "Access to all features",
            "One-click instant sharing",
            "Unlimited archived spaces",
            "Email & chat support",
        ],
    },
    {
        type: "Pro",
        pricePerMonth: 39,
        description: "Up to 50 shared spaces",
        character: [
            "Access to all features",
            "One-click instant sharing",
            "Unlimited archived spaces",
            "Email & chat support",
            "Email & chat support",
        ],
    },
    {
        type: "Premium",
        pricePerMonth: 69,
        description: "Up to 120 shared spaces",
        character: [
            "Access to all features",
            "One-click instant sharing",
            "Unlimited archived spaces",
            "Email & chat support",
            "Email & chat support",
            "Email & chat support",
        ],
    },
];

const PricingComponent = () => {
    return (
        <div className="component-pricing section-py-80">
            <Container className="p-5 rounded-2">
                {/* <div className="title mb-5">
                    <h1 className="fs-1 fw-bolder text-center">Pricing</h1>
                </div> */}
                <div className="pricing">
                    <div className="d-flex justify-content-between">
                        {PricingList.map((Pricing, index) => (
                            <div key={index}>
                                <div className="pricing-item border shadow h-100 p-5 rounded-4 d-flex flex-column">
                                    <div className="d-flex flex-column gap-3">
                                        <h2 className="fs-2 fw-bolder ">
                                            {Pricing.type}
                                        </h2>
                                        <h3 className="fs-1 fw-normal">
                                            ${Pricing.pricePerMonth}
                                            <span className="fs-4 fw-bolder">
                                                /month
                                            </span>
                                            {""}
                                        </h3>
                                        <p className="fs-5 fw-medium">
                                            {Pricing.description}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between flex-grow-1">
                                        <div className=" d-flex flex-column gap-2 py-3">
                                            {Pricing.character.map(
                                                (character, index) => (
                                                    <div
                                                        className="d-flex gap-2 align-items-center"
                                                        key={index}
                                                    >
                                                        <i className="bi bi-check-circle-fill fs-5"></i>
                                                        {character}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <button className="button-secondary ">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PricingComponent;

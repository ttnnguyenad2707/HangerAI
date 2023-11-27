"use client";
import ContactHome from "@/components/ContactHome";
import AboutProduct from "@/components/aboutProduct";
import Banner from "@/components/banner";
import ContentCol from "@/components/content-col";
import Founder from "@/components/founder";
import ImageText from "@/components/imageText";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <Banner />
            <ContentCol />
            <AboutProduct
                header="Adapts so that you can stay in the flow"
                subheader="FLOW"
                description="Pick an out-of-the box template or create your own with just a few clicks. Easily extend or customize rules and workflows to fit Typeface into your natural processes."
                template={1}
                background={true}
            />
            <AboutProduct
                header="Adapts so that you can stay in the flow"
                subheader="FLOW"
                description="Pick an out-of-the box template or create your own with just a few clicks. Easily extend or customize rules and workflows to fit Typeface into your natural processes."
                template={2}
                background={false}
            />
            <ImageText />
            <Founder />
            <ContactHome />
        </React.Fragment>
    );
}

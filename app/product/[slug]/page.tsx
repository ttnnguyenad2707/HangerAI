import ContactHome from "@/components/ContactHome";
import Banner from "@/components/banner";
import AboutSubProduct from "@/components/product/aboutProduct";
import ImageTextSide from "@/components/product/imageTextSide";
import Slogan from "@/components/product/slogan";
import React from "react";

interface Content {
    Banner: {
        title: string;
        description: string;
        linkButton: string;
        thumbnail: string;
    };
}

function Product({ params }: { params: { slug: string } }) {
    let content: Content = {
        Banner: { title: "", description: "", linkButton: "", thumbnail: "" },
    }; // Initialize content
    // if (params.slug === "product-tagging") {
    if (true) {
        content = {
            Banner: {
                title: "AI generated product content",
                description:
                    "AI generated product content delivers meticulously crafted descriptions, leveraging advanced technology to create compelling and accurate portrayals of items, enhancing the consumer experience.",
                linkButton: "#",
                thumbnail: "/images/product-tagging/product-tagging-banner.jpg",
            },
        };
    }
    return (
        <>
            <Banner
                tag={params.slug}
                title={content.Banner.title}
                description={content.Banner.description}
                buttonText="Try now"
                linkButton={content.Banner.linkButton}
                thumbnail={content.Banner.thumbnail}
            />
            <ImageTextSide
                side={0}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            <ImageTextSide
                side={1}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            <ImageTextSide
                side={0}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            {/* <Slogan /> */}
            <ContactHome />
        </>
    );
}

export default Product;

"use client";
import ImageMarquee from "@/components/MarqueeComponent";
import ContactHome from "@/components/ContactHome";
import AboutProduct from "@/components/aboutProduct";
import Banner from "@/components/banner";
import ContentCol from "@/components/content-col";
import Founder from "@/components/founder";
import ImageText from "@/components/imageText";
import React from "react";
import Feedback from "@/components/feedback";
import { AboutProduct as AboutProductType  } from "@/interface/AboutProduct";

export default function Home() {
    const images = [
        "./images/founder/02.png",
        "./images/landing-page/banner.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
    ];
    const aboutProductsFirst: AboutProductType[] = [
        { title: "Virtual Try-on", videoId: "F5tS5m86bOI", description: "Try on clothes online and see how different outfits look on you." },
        { title: "Upscale Image", videoId: "F5tS5m86bOI", description: "Boost resolution for pixel-perfect close-ups and model shots." },
        { title: "Background Generator", videoId: "F5tS5m86bOI", description: "Generate custom backgrounds that complement the product." },
        { title: "Image Recolor", videoId: "F5tS5m86bOI", description: "Find the perfect shade for your product." },
        { title: "Image Inpainting", videoId: "F5tS5m86bOI", description: "Retouch image, remove and/or generate patterns on product." },
        { title: "Magic Eraser", videoId: "F5tS5m86bOI", description: "Remove distractions and unwanted objects." },
    ];
    const aboutProductsSecond: AboutProductType[] = [
        { title: "AI Product Descriptions", videoId: "F5tS5m86bOI", description: "Automate product descriptions, enrich product catalog." },
        { title: "Product Tagging", videoId: "F5tS5m86bOI", description: "Tame the inventories with smart tags for better shopping experience." },
        { title: "Website/SEO", videoId: "F5tS5m86bOI", description: "Craft impactful copywriting & keywords for skyrocketing search visibility." },
        { title: "Communications", videoId: "F5tS5m86bOI", description: "Make compelling emails, memos, and more." },
        { title: "Social Media Marketing", videoId: "F5tS5m86bOI", description: "Transform product images into descriptive Facebook posts, ad copy,.." },
    ];
    return (
        <React.Fragment>
            <Banner
                title="Adopt Gen AI in Personalized Content Creation"
                description="We provide a platform that simplifies product photoshoots and content writing."
                buttonText="Join Frees"
                linkButton="#"
                thumbnail="/images/landing-page/banner.png"
            />
            <ContentCol />
            <AboutProduct
                header="AI Photoshoots Studio Design"
                subheader="FLOW"
                description="Pick an out-of-the box template or create your own with just a few clicks. Easily extend or customize rules and workflows to fit Typeface into your natural processes."
                template={1}
                background={true}
                content={aboutProductsFirst}
            />
            <AboutProduct
                header="AI Content Writing"
                subheader="FLOW"
                description="Pick an out-of-the box template or create your own with just a few clicks. Easily extend or customize rules and workflows to fit Typeface into your natural processes."
                template={2}
                background={false}
                content={aboutProductsSecond}
            />
            <ImageText />
            {/* <Feedback
                    Feedbacks={[
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                    ]}
                    direction="right"
                /> */}
            <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Virtual Try-on",
                        description:
                            "Try on clothes online",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Upscale Image",
                        description:
                            "Boost image resolution",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Background Generator",
                        description:
                            "Generate custom backgrounds.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Image Recolor",
                        description:
                            "Adjust image colors without Photoshop.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Social Media Marketing",
                        description:
                            "Create descriptive Facebook posts, ad copy,...",
                    },
                ]}
                direction="left"
            />
            <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Image Inpainting",
                        description:
                            "Retouch image, remove, generate patterns on product.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Magic Eraser",
                        description:
                            "Remove any distractions and unwanted objects.",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Product Descriptions",
                        description:
                            "Extract product details from image, enrich product catalog.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Product Tagging",
                        description:
                            "Add smart tags for inventories",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Website/SEO",
                        description:
                            "Craft impactful copywriting & SEO keywords",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Communications",
                        description:
                            "Create emails, memos, and more.",
                    },
                ]}
                direction="right"
            />
            <ContactHome />
        </React.Fragment>
    );
}

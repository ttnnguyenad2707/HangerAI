"use client";
import ImageMarquee from "@/components/MarqueeComponent";
import ContactHome from "@/components/ContactHome";
import AboutProduct from "@/components/aboutProduct";
import Banner from "@/components/banner";
import ContentCol from "@/components/content-col";
import Founder from "@/components/founder";
import ImageText from "@/components/imageText";
import React from "react";

export default function Home() {
    const images = [
        "./images/founder/02.png",
        "./images/landing-page/banner.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
    ];
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
            <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "OutFit Recommendation",
                        description:
                            "Described as providing suggestions or suggestions for clothing combinations tailored to an individual's style, preferences, or occasions.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Visual Dressing Room",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Photoshoots Studio Design",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Product Content Generative",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                ]}
                direction="left"
            />
            <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "OutFit Recommendation",
                        description:
                            "Described as providing suggestions or suggestions for clothing combinations tailored to an individual's style, preferences, or occasions.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Visual Dressing Room",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Photoshoots Studio Design",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Product Content Generative",
                        description:
                            "A Visual Dressing Room is a digital tool allowing users to virtually try on and visualize different clothing items or outfits.",
                    },
                ]}
                direction="right"
            />
            <ContactHome />
        </React.Fragment>
    );
}

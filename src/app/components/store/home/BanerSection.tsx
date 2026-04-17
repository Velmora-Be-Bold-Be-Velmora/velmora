'use client';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import AutoSlider from "embla-carousel-autoplay";
import { useRef } from "react";
import classes from './Home.module.css';
import { Carousel } from "@mantine/carousel";

export default function BanerSection() {
    const autoplay = useRef(AutoSlider({ delay: 2000 }));

    return(
        <>
        <Carousel 
            height={450}
            withIndicators
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}>
                <Carousel.Slide>
                    <img src="https://www.shutterstock.com/image-photo/stylish-woman-mobile-phone-near-260nw-2433406041.jpg" alt="Offer 1" className={classes.bannerImage} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/041/417/220/small/fashion-sale-horizontal-banner-with-discount-offer-advertisement-with-colorful-sketches-of-various-clothing-items-illustration-vector.jpg" alt="Offer 2" className={classes.bannerImage} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src="https://www.shutterstock.com/image-photo/beautiful-asian-woman-shopping-bags-600nw-2704745759.jpg" className={classes.bannerImage} />
                </Carousel.Slide>
            </Carousel>
        </>
    )
}
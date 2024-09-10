"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Correctly import Autoplay module
import "swiper/css";
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import slideImage from "@/assets/slider.jpg";
import Image from "next/image";
import { useEffect } from "react";
import { register } from 'swiper/element/bundle'; // Ensure modules are registered

// Register Swiper modules
register();

const Banner = () => {
    return (
        <div>
            <Swiper
                loop={true} // Enable loop
                autoplay={{
                    delay: 3000, // 2.5 seconds delay
                    disableOnInteraction: false, // Keep autoplay active after user interaction
                }}
                speed={1000}
                modules={[Autoplay]} // Register the Autoplay module
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={slideImage} width={1300} height={1300} alt="Image not found" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideImage} width={1300} height={1300} alt="Image not found" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideImage} width={1300} height={1300} alt="Image not found" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideImage} width={1300} height={1300} alt="Image not found" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideImage} width={1300} height={1300} alt="Image not found" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

import ScrollingTestimonials from "@/components/Static-components/Testimonial-Parralex/Testimony-marqueue";
import {dancing_Script} from "@/fonts/googleFonts";
import {BlurFade} from "@/components/animations/Blur-Fade-Magic";
import {reviewConfig} from "@/config/main-website-config/ReviewsConfig";

export const HeroParallax = () => {

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // const translateX = useSpring(
    //     useTransform(scrollYProgress, [0, 1], [0, 1000]),
    //     springConfig
    // );
    // const translateXReverse = useSpring(
    //     useTransform(scrollYProgress, [0, 1], [0, -1000]),
    //     springConfig
    // );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="md:h-[240vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header/>
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="md:block hidden"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse mt-[20%] space-x-20 mb-20">
                    <ProductCard/>

                </motion.div>

            </motion.div>
            <BlurFade direction={'up'} inView delay={0.4}>
            <div className="flex md:hidden  overflow-x-hidden space-x-reverse mt-[20%] space-x-20 mb-20">
                <ProductCard/>
            </div>
            </BlurFade>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40  px-10  w-full  left-0 top-0">
            <BlurFade  inView >
            <h1 className={`${dancing_Script.className} text-[var(--color-accent-brand-blue)] md:text-7xl md:text-left text-center  text-4xl font-bold`}>
                What Our Users Say
            </h1>
            </BlurFade>
            <BlurFade  inView delay={0.2}>
            <p className="mt-10 font-light md:text-left text-center ">
                Don't just trust our claims! Read what our users have to say!
            </p>
            </BlurFade>
        </div>
    );
};

export const ProductCard = () => {
    return (
        <div


            className="group/product md:h-96 w-[30rem] relative shrink-0"
        >
            <ScrollingTestimonials
                data={reviewConfig}
            />
        </div>
    );
};

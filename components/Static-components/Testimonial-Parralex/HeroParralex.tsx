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
            className="md:h-[240vh] py-40   antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
                data={[
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
                        image: 'https://plus.unsplash.com/premium_photo-1717529137991-510ad3be15d9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'John Doe.'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
                        image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Paul A'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
                        image: 'https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Jeff Roe'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
                        image: 'https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Mex Q'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
                        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Cristina W'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
                        image: 'https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Lanna Del Rey'
                    },
                    {
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
                        image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Paul Logan'
                    }
                ]}
            />
        </div>
    );
};

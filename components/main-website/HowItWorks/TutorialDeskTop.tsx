'use client'
import {useRef} from "react";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import consultation from "@/public/How It Works/Consultation.png";
import planning from "@/public/How It Works/planning.png";
import booking from "@/public/How It Works/booking.png";
import execution from "@/public/How It Works/execution.png";
import feedback from "@/public/How It Works/feedback.png";
import Image from "next/image";
import {dancing_Script} from "@/fonts/googleFonts";

export default function TutorialDeskTop(){
    const sectionRef = useRef(null);


    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"], // Ensures proper animation timing
    });

    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-70%"]); // Adjusted movement

    return (
            <section ref={sectionRef}
                     className="lg:h-[450vh] md:h-[500vh] md:block hidden relative bg-[var(--color-accent-brand-yellow)] z-50">
                {/* Sticky container to keep the title visible */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                    {/* Title */}
                    <h2 className={`${dancing_Script.className} text-[var(--color-accent-brand-blue)] font-bold text-7xl absolute top-30`}>
                        How It Works
                    </h2>


                    {/* Moving horizontal container */}
                    <motion.div style={{x}} className="flex items-center w-[500vw] space-x-20">

                        {/* Steps of the process */}
                        {[
                            {src: consultation, title: "Consultation"},
                            {src: planning, title: "Planning"},
                            {src: booking, title: "Booking"},
                            {src: execution, title: "Execution"},
                            {src: feedback, title: "Feedback"},
                        ].map((step, index) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const stepRef = useRef(null);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const isInView = useInView(stepRef, { margin: "-40%"  });

                            return <div ref={stepRef} key={index}
                                        className="flex-shrink-0 relative w-screen h-screen justify-center flex flex-col items-center">
                                <div className="w-[300px] h-[266px] overflow-y-hidden">
                                    <motion.div initial={{y: -300}}
                                                animate={isInView && {y: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    duration: 0.9,

                                                }}
                                    >
                                        <Image src={step.src} alt={step.title} width={300} height={200}/>
                                    </motion.div>
                                </div>
                                <div className=" w-[50%] h-1 relative "></div>
                                <motion.h3
                                    initial={{y: '100vh'}}
                                    animate={isInView && {y: 0}}
                                    transition={{
                                        type: 'tween',
                                        duration: 0.9,


                                    }}
                                    className="text-5xl  flex items-center re gap-5 text-black  font-light"><span
                                    className="text-5xl text-[var(--color-accent-brand-blue)] border-[var(--color-accent-brand-blue)] border-dashed font-normal border-2 px-4 py-1 rounded-full">{index + 1}</span> {step.title}
                                </motion.h3>

                            </div>
                        })}

                    </motion.div>
                </div>
            </section>
            )
}
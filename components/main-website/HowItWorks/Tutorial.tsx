import Image from "next/image";

import consultation from '@/public/How It Works/Consultation.png';
import planning from '@/public/How It Works/planning.png';
import booking from '@/public/How It Works/booking.png';
import execution from '@/public/How It Works/execution.png';
import feedback from '@/public/How It Works/feedback.png';
import {dancing_Script} from "@/fonts/googleFonts";
import TutorialDeskTop from "@/components/main-website/HowItWorks/TutorialDeskTop";


export default function HowItWorks() {

    return (
        <>
            <TutorialDeskTop/>
            <section className=" md:hidden block relative bg-[var(--color-accent-brand-yellow)] z-50">
                {/* Sticky container to keep the title visible */}
                <div className=" gap-14 w-full flex flex-col py-20 items-center justify-center overflow-hidden">

                    {/* Title */}
                    <h2 className={`text-[var(--color-accent-brand-blue)] ${dancing_Script.className} font-bold text-5xl`}>
                        How It Works
                    </h2>

                    <div  className="flex  flex-col gap-10">
                        {[
                            {src: consultation, title: "Consultation"},
                            {src: planning, title: "Planning"},
                            {src: booking, title: "Booking"},
                            {src: execution, title: "Execution"},
                            {src: feedback, title: "Feedback"},
                        ].map((step, index) => (
                            <div key={index} className="flex-shrink-0 w-screen flex flex-col items-center">
                                <Image src={step.src} alt={step.title} width={300} height={300}/>
                                <h3 className="text-3xl  flex items-center gap-2 text-black  font-light mt-4"><span className="text-5xl text-[var(--color-accent-brand-blue)] border-[var(--color-accent-brand-blue)] font-normal border-2 px-4 py-1 rounded-full">{index + 1 }</span> { step.title}</h3>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

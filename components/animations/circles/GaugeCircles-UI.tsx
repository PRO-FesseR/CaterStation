'use client'
import {cn} from "@/utils/tailwindConfig/utils"
import {motion} from "framer-motion";
import {ReactNode} from "react";

interface Props {
    max: number
    value: { name: string, icon: ReactNode }
    min: number
    gaugePrimaryColor: string
    gaugeSecondaryColor: string
    className?: string,
    delay:number
}

export function GaugeCircle({
                                max = 100,
                                min = 0,
                                value,
                                delay,
                                gaugePrimaryColor,
                                gaugeSecondaryColor,
                                className,
                            }: Props) {
    const circumference = 2 * Math.PI * 45
    const percentPx = circumference / 100
    const currentPercent = ((100 - min) / (max - min)) * 100



    return (
        <div
            className={cn("relative size-48 hover:scale-105  transition cursor-pointer rounded-full text-2xl font-semibold", className)}
            style={
                {
                    "--circle-size": "100px",
                    "--circumference": `${circumference}px`,
                    "--percent-to-px": `${percentPx}px`,
                    "--gap-percent": "5",
                    "--offset-factor": "0",
                    "--transition-length": "1s",
                    "--transition-step": "200ms",
                    "--delay": "0s",
                    "--percent-to-deg": "3.6deg",
                    transform: "translateZ(0)",
                } as React.CSSProperties
            }
        >
            <svg
                fill="none"
                className="size-full"
                strokeWidth="2"
                viewBox="0 0 100 100"
            >
                {currentPercent <= 90 && currentPercent >= 0 && (
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        strokeWidth="2"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-100"
                        style={{
                            stroke: gaugeSecondaryColor,
                            strokeDasharray: `${(90 - currentPercent) * percentPx}px ${circumference}px`,
                            transform: `rotate(calc(1turn - 90deg - (5 * 3.6deg * (1 - 0)))) scaleY(-1)`,
                            transition: "all 1s ease 0s",
                            transformOrigin: "50px 50px",
                        }}
                    />
                )}
                <motion.circle
                    initial={{
                        strokeDasharray: `0px ${circumference}px`,
                    }}
                    whileInView={{
                        strokeDasharray: `${currentPercent * percentPx}px ${circumference}px`,

                    }}
                    transition={{
                        delay,
                        duration: 0.8,
                        type:'ease'
                    }}
                    viewport={{once:true}}
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="2"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-100"
                    style={{
                        stroke: gaugePrimaryColor,
                        transition: "1s ease 0s, stroke 1s ease 0s",
                        transitionProperty: "stroke-dasharray,transform",
                        transform: "rotate(calc(-90deg + 5 * 0 * 3.6deg))",
                        transformOrigin: "50px 50px",
                    }}
                />
            </svg>
            <span
                className="animate-in fade-in absolute inset-0 m-auto size-fit"
                style={{
                    animationDelay: "0s",
                    transitionDuration: "1s",
                }}
            >
              <div className="flex flex-col gap-2 font-light text-lg justify-center items-center">
                    {value.name}
                  {value.icon}
                </div>
         </span>
        </div>

    )
}


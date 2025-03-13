"use client"
import { motion } from "framer-motion"
import { cn } from "@/utils/tailwindConfig/utils"
import Image from "next/image";
import CaterStationLogo from "@/public/logo/cater-station-hat.png";

interface BlurIntProps {
    word: string
    className?: string
    variant?: {
        hidden: { filter: string; opacity: number }
        visible: { filter: string; opacity: number }
    }
    duration?: number
}
export default function BlurIn({ word, className, variant, duration = 1 }: BlurIntProps) {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    }
    const combinedVariants = variant || defaultVariants

    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration }}
            variants={combinedVariants}
            className={cn(
                className,
                "font-display font-bold tracking-[-0.02em] drop-shadow-sm ",
            )}
        >
            <Image className="transform -rotate-[25deg] -translate-x-10 md:-translate-x-3 lg:translate-y-2" src={CaterStationLogo} alt="Cater Station logo"/>
            {word}
        </motion.h1>
    )
}



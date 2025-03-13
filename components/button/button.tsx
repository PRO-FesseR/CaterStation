'use client'
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
    text?: string;
    className?: string;
}

export function InteractiveHoverButton({
                                           text = "Button",
                                           className,
                                       }: InteractiveHoverButtonProps = {}) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-white p-2 text-center font-semibold text-black transition-all duration-300 ${
                isClicked ? "active" : ""
            } ${className}`}
            onClick={() => setIsClicked(!isClicked)}
 // Ensure it works on touch devices
        >
            <span
                className={`inline-block translate-x-1 transition-all duration-300 ${
                    isClicked ? "translate-x-12! opacity-0!" : "group-hover:translate-x-12 group-hover:opacity-0"
                }`}
            >
                {text}
            </span>
            <div
                className={`absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 text-white transition-all duration-300 ${
                    isClicked ? "-translate-x-1! opacity-100!" : "translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100"
                }`}
            >
                <span>Become a Cater Station</span>
                <ArrowRight />
            </div>
            <div
                className={`absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 ${
                    isClicked
                        ? "left-[0%]! top-[0%]! h-full! w-full! scale-[1.8]! bg-green-600!"
                        : "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-green-600 dark:group-hover:bg-green-600"
                }`}
            ></div>
        </div>
    );
}

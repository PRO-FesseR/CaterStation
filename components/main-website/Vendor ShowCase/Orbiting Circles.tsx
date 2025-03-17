import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/tailwindConfig/utils";

import caterStation from "@/public/logo/cater-station-nav-logo.png";

export const testOrbitingItems = [
    "/images/github.png",
    "/images/twitter.png",
    "/images/react.png",
    "/images/tailwind.png",
    "/images/framer.png",
    "/images/apple.png",
    caterStation,
];

interface OrbitingItemsProps {
    radius: number;
    items: (string | StaticImageData)[];
    pauseOnHover?: boolean;
    backgroundClassName?: string;
    containerClassName?: string;
    className?: string;
}

const calculateItemStyle = ({
                                index,
                                radius,
                                totalItems,
                            }: {
    radius: number;
    index: number;
    totalItems: number;
}) => {
    const angle = (index / totalItems) * 360;
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    return {
        left: `${50 + x}%`,
        top: `${50 + y}%`,
        transform: "translate(-50%, -50%)",
    };
};

export default function OrbitingItems({
                                          radius = 50,
                                          items = testOrbitingItems,
                                          pauseOnHover,
                                          backgroundClassName,
                                          containerClassName,
                                          className,
                                      }: OrbitingItemsProps) {
    return (
        <div className={cn("storybook-fix group flex items-center justify-center py-32", containerClassName)}>
            <div className={cn("absolute inset-0 h-full w-full items-center ", backgroundClassName)} />
            <div className={cn("relative flex h-64 w-64 orbit-rotation items-center justify-center", className)}>
                <div className="absolute h-full w-full rounded-full border-2 border-gray-500" />
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-gray-200"
                        style={calculateItemStyle({ index, radius, totalItems: items.length })}
                    >
                        <div className="orbit-reverse  border-1 border-black rounded-full">
                            <Image src={item} alt={`orbiting-item-${index}`}  className="rounded-full" />
                            <p className=""></p>
                        </div>
                    </div>
                ))}
                <div className="absolute h-1/2 w-1/2 rounded-full border-1 border-gray-700 flex justify-center items-center orbit-reverse" >
                    <Image src={caterStation} alt="logo" />
                </div>
            </div>
        </div>
    );
}

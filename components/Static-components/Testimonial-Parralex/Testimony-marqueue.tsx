import Marquee from "@/components/Static-components/Testimonial-Parralex/Marqueue";
import Image from "next/image";
import {useEffect, useState} from "react";

interface Testimonial {
    name: string;
    image: any;
    description: string;
}

interface TestimonialProps {
    data: Testimonial[];
}
function TestimonialCard({
                             testimonial: { image, name, description },
                         }: {
    testimonial: Testimonial;
}) {
    return (
        <div
            className=" flex w-96  overflow-hidden rounded-xl border bg-background dark:border-zinc-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-primary"
            key={name}
        >
            <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="px-4 py-2">
                <span className="block text-lg font-bold text-foreground">{name}</span>

                <span className="block text-sm text-foreground">{description}</span>
            </div>
        </div>
    );
}

function shuffleArray<T>(array: T[]): T[] {
    return [...array]
        .map((item) => ({ item, sort: Math.random() })) // Assign a random sort value
        .sort((a, b) => a.sort - b.sort) // Sort based on the random value
        .map(({ item }) => item); // Extract items back into an array
}


export default function ScrollingTestimonials({ data }: TestimonialProps) {
    const [shuffledData, setShuffledData] = useState<Testimonial[]>(data);
    useEffect(() => {
        setShuffledData(shuffleArray(data)); // Shuffle only on the client
    }, [data]);

    return (
        <div className="w-full">
            <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
                {data.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </Marquee>

            <Marquee reverse className="[--duration:25s]" pauseOnHover applyMask={false}>
                {shuffledData.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </Marquee>


        </div>
    );
}

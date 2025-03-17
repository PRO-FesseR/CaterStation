import {MoveUpRight} from "lucide-react";
import React from 'react';
import Image from 'next/image';
import lahore from '@/public/dummy_locations/Lahore.jpg'
import sialkot from '@/public/dummy_locations/sialkot.jpg'
import islamabad from '@/public/dummy_locations/islamabad.jpg'
import {dancing_Script} from "@/fonts/googleFonts";
import { SlidingNumberFinal} from "@/components/main-website/cater-Station-Cities/slidingNumbers";
import {BlurFade} from "@/components/animations/Blur-Fade-Magic";

const locations = [
    {
        name:'Lahore',
        total: 51,
        comingSoon: false,
        src:lahore
    },
    {
        name:'Sialkot',
        total: 0,
        comingSoon: true,
        src:sialkot
    },
    {
        name:'Islamabad',
        total: 0,
        comingSoon: true,
        src:islamabad
    }
]

export default function CaterStationCities(){
    return(
        <section className=" mt-12 flex flex-col gap-14 px-20">
            <article className="flex gap-4 flex-col">
                <BlurFade inView={true}>
                <h2 className={`text-[var(--color-accent-brand-blue)] ${dancing_Script.className} text-center font-bold text-4xl md:text-6xl`}>Our Caterstations</h2>
                </BlurFade>
                <BlurFade delay={0.1} inView={true}>
                <p  className="text-center  font-light">Find out the top caterstations in the major cities of Pakistan</p>
                </BlurFade>
                </article>

            <div className="flex flex-wrap justify-center items-center   gap-5 w-full">
                {locations.map((location, index) => (
                    <BlurFade key={location.name} inView={true} delay={index * 0.25} >
                    <div  className={` relative pb-4 rounded-2xl  overflow-hidden`}>
                        <div className=' w-[260px] rounded-xl h-[300px] overflow-hidden'>
                            <Image
                                src={location.src}
                                alt={'image'}
                                height={200}
                                width={200}
                                className='h-full w-full object-left-top rounded-xl hover:scale-100 scale-105 brightness-50 transition-all duration-300'
                            />
                        </div>
                        {!location.comingSoon && <button
                            className='group absolute top-2 right-1 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#080918] cursor-pointer  font-medium text-neutral-200 border-2 transition-all duration-300 hover:w-40'>
                            <div
                                className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100'>
                                Check{' '}Out
                            </div>
                            <div className='absolute right-3'>
                                <MoveUpRight/>
                            </div>
                        </button>}

                        <div
                            className='absolute bottom-2 text-black w-full p-4 flex flex-col justify-between items-start'>
                            <div
                                className={!location.comingSoon ?"text-5xl  bg-black flex items-center text-white rounded-t-xl p-2 px-4": "text-5xl  bg-black flex items-center text-white rounded-br-xl rounded-t-xl p-2 px-4"}>
                                {location.comingSoon ?
                                    <span className="text-2xl ">Coming Soon</span> : <SlidingNumberFinal maxValue={location.total} /> }
                            </div>

                            <h3 className={!location.comingSoon ?'text-xl bg-black text-white rounded-b-xl rounded-tr-xl p-2 px-4':'text-xl bg-black text-white rounded-b-xl p-2 px-4'}>
                                {location.name}
                            </h3>


                        </div>
                    </div>
                        </BlurFade >
                        ))}


            </div>

        </section>
    )
}

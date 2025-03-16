
import React from 'react';


import BlurIn from "@/components/animations/text-animations/blur-in";
import {dancing_Script} from "@/fonts/googleFonts";
import {ContactLinks, SocialLinks, SocialMediaLinks} from "@/components/body/footerSection/linksTypes";


const FooterSection = () => {



    return (
        <>

            <div
                className='relative md:h-[97vh] h-[130vh] bg-[var(--color-accent-brand-blue)] text-white  bg-[#f7f7f7] '

            >
                <div className='flex flex-col h-full px-4  mx-auto'>
                    <div className='flex h-full justify-between  w-full'>
                        <div className="flex flex-col gap-10  justify-center items-center">
                            <h2 className='md:text-8xl text-7xl text-[var(--color-accent-brand-yellow)] font-semibold'>
                                The New Way To Cater Your Events!
                            </h2>
                            <div className='pb-6 w-full justify-center gap-20 flex items-center  md:flex-row flex-col'>
                                <div className="flex md:w-[50%] w-full flex-col">
                                <p className='md:text-2xl text-xl text-[var(--color-accent-brand-yellow)] py-4'>
                                    Follow us on:
                                </p>

                                <SocialMediaLinks/>
                                </div>
                                <div className="flex md:w-[50%] w-full flex-col">
                                <p className='md:text-2xl text-xl text-[var(--color-accent-brand-yellow)] py-4'>
                                    Contact Us on:
                                </p>
                                <ContactLinks/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10'>


                        </div>
                    </div>
                    <div className=' md:py-4 '>
                        <BlurIn grayScale={true} word="Cater Station"
                                className={`${dancing_Script.className} lg:text-9xl md:text-8xl text-5xl text-gray-500`}/>
                    </div>
                    <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2025, All Rights Reserved.
            </span>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;

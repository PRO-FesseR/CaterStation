import BlurIn from "@/components/body/text-animations/blur-in";
import {dancing_Script} from "@/fonts/googleFonts";
import {BlurFade} from "@/components/animations/Blur-Fade-Magic";
import {TextLoop} from "@/components/animations/Text-loop-motion";
import HeroForm from "@/components/body/forms/Hero-form";
import {InfiniteSlider} from "@/components/animations/HorizontalSlider-motion";
import Image from "next/image";
import pic1 from "@/public/Hero-Images/pic-1.jpg";
import pic2 from "@/public/Hero-Images/pic-2.jpg";
import pic3 from "@/public/Hero-Images/pic-3.jpg";
import pic4 from "@/public/Hero-Images/pic-4.jpg";


const images = [
    {
        imageId:0,
        src:pic1,
    },
    {
        imageId:1,
        src:pic2,
    },
    {
        imageId:2,
        src:pic3,
    },
    {
        imageId:3,
        src:pic4,
    },



]


export default function HeroSection(){
    return (
        <section
            className='text-black md:bg-gradient-to-r from-white to-transparent h-screen  md:w-[100%] z-40 sticky '>
            <InfiniteSlider gap={0} className="absolute top-0  h-[120vh] md:w-[30%]! w-full right-0   "
                            direction='vertical'>
                {images.map((image, idx) => (
                    <BlurFade key={image.imageId} delay={0.25 + idx * 0.05} inView>
                        <Image
                            className="mb-4  w-[100%]  size-full rounded-lg object-contain"
                            src={image.src}
                            alt={`Random stock image ${idx + 1}`}
                        />
                    </BlurFade>
                ))}
            </InfiniteSlider>
            <div
                className='absolute bottom-0 left-0 right-0 top-0 '></div>


            <article className="flex flex-col h-[86vh] w-full gap-10 px-12 md:justify-center justify-end">
                <div
                    className="flex flex-col items-center md:rounded-none rounded-xl md:shadow-none  md:gap-0 gap-4 z-50 md:p-0 p-10 md:bg-transparent  bg-white md:items-start w-full">
                    <BlurIn word="Cater Station"
                            className={`${dancing_Script.className}  w-full lg:text-9xl md:text-8xl text-5xl text-[#263455]`}/>
                    {/*<GradualSpacing className="lg:text-xl md:text-sm"*/}
                    {/*                text=" Make your Event management experience digitalized with Caterstation"/>*/}
                    <BlurFade delay={0.25} inView className="md:w-[40%] w-full md:text-5xl text-xl">
                        <h1> Make your Event management experience <TextLoop
                            className=''
                            transition={{
                                type: 'spring',
                                stiffness: 900,
                                damping: 80,
                                mass: 10,
                            }}
                            variants={{
                                initial: {
                                    y: 20,
                                    rotateX: 90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                                animate: {
                                    y: 0,
                                    rotateX: 0,
                                    opacity: 1,
                                    filter: 'blur(0px)',
                                },
                                exit: {
                                    y: -20,
                                    rotateX: -90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                            }}
                        >
                            <span>efficient. </span>
                            <span>next-level. </span>
                            <span>enhanced.  </span>
                            <span>unforgettable.   </span>
                            <span>inspiring.    </span>
                            <span>exciting.     </span>
                            <span>digitalize.   </span>
                        </TextLoop></h1>
                    </BlurFade>
                    <HeroForm/>
                </div>


            </article>
            <div>

            </div>
        </section>
    )
}
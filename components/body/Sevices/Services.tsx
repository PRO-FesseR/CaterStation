import {dancing_Script} from "@/fonts/googleFonts";
import {GaugeCircle} from "@/components/animations/circles/GaugeCircles-UI";
import {BlurFade} from "@/components/animations/Blur-Fade-Magic";
import {servicesConfig} from "@/components/config/Services-config";





export default function Services(){
    return (
        <section
            className='bg-[#223454]  text-[#ffb934] py-[50px] md:py-0 z-50 md:h-[100vh] relative md:sticky  md:top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div
                className='absolute bottom-0 left-0 right-0 top-0 '></div>

            <article className="w-full h-full flex gap-14 flex-col justify-center   items-center">
                <div className="flex flex-col gap-4 px-10 text-center">

                    <h2 className={`${dancing_Script.className} text-3xl md:text-7xl font-bold`}>Services We Provide</h2>
                    <p className="text-sm md:text-md">Our extensive range of services is designed to transform your vision for an
                        event into a
                        breathtaking reality,
                        ensuring that every moment leaves a lasting impression.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {servicesConfig.map((service, index) => {
                        return<div key={service.name}>
                            <BlurFade className="md:block hidden " delay={index * 0.25} inView >
                        <GaugeCircle  value={service} gaugePrimaryColor={'#ffb934'}
                                            gaugeSecondaryColor={'rgba(32,47,81,0.1)'} max={100} min={0} delay={index *0.15}/>
                        </BlurFade>
                        <GaugeCircle  className="md:hidden block" value={service} gaugePrimaryColor={'#ffb934'}
                                       gaugeSecondaryColor={'rgba(32,47,81,0.1)'} max={100} min={0} delay={0 }/>
                        </div>
                    })}


                </div>
            </article>

        </section>
    )
}
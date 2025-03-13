
import {dancing_Script} from "@/fonts/googleFonts";
import BlurIn from "@/components/body/text-animations/blur-in";
import {GradualSpacing} from "@/components/body/text-animations/gradually-spacing";
import HeroForm from "@/components/body/forms/Hero-form";
export default function Hero(){
    return (
        <main className='bg-white'>
            <div className='wrapper'>
                <section className='text-black  h-[90vh]  w-full bg-white  sticky top-[10%]'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 '></div>
                    <article className="flex flex-col h-full w-full gap-10 px-12 justify-center">
                        <div className="flex flex-col">
                        <BlurIn word="Cater Station" className={`${dancing_Script.className} text-9xl text-[#263455]`}/>
                     <GradualSpacing className="text-xl"
                            text=" Make your Event management experience digitalized with Caterstation"/>
                        </div>
                    <HeroForm/>

                    </article>
                    <div>

                    </div>
                </section>

                <section
                    className='bg-yellow-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <h1 className='2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]'>

                    </h1>
                </section>
                <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>

                    </h1>
                </section>
            </div>




        </main>
    )
}
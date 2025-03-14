import HeroSection from "@/components/Hero/Hero-Section";
import Services from "@/components/body/Sevices/Services";


export default function BodyPage(){
    return (
        <main className='bg-white'>
            <div className='wrapper'>
                <HeroSection/>

               <Services/>


                <section
                    className='text-white  h-screen  w-full bg-slate-950  z-60  grid place-content-center sticky top-0'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>

                    </h1>
                </section>
            </div>


        </main>
    )
}
import HeroSection from "@/components/body/Hero/Hero-Section";


export default function Hero(){
    return (
        <main className='bg-white'>
            <div className='wrapper'>
                <HeroSection/>

                <section
                    className='bg-yellow-300 text-black grid place-content-center z-50 h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <h2>Services We Provide</h2>
                    <p>Our extensive range of services is designed to transform your vision for an event into a breathtaking reality,
                        ensuring that every moment leaves a lasting impression.</p>
                </section>
                <section className='text-white  h-screen  w-full bg-slate-950  z-60  grid place-content-center sticky top-0'>
                    <div
                        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>

                    </h1>
                </section>
            </div>


        </main>
    )
}
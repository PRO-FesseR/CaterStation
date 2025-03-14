import {dancing_Script} from "@/fonts/googleFonts";





export default function Services(){
    return (
        <section
            className='bg-[#223454]  text-[#ffb934]  z-50 h-[70vh] sticky top-[38vh] rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div
                className='absolute bottom-0 left-0 right-0 top-0 '></div>

            <article className="w-full h-full flex flex-col justify-start mt-[7vh] items-center">
                <div className="flex flex-col gap-4 px-10 text-center">

                    <h2 className={`${dancing_Script.className} text-7xl font-bold`}>Services We Provide</h2>
                    <p className="text-md">Our extensive range of services is designed to transform your vision for an
                        event into a
                        breathtaking reality,
                        ensuring that every moment leaves a lasting impression.</p>

                    <div className="flex flex-wrap">
                        {/*<GaugeCircles />*/}

                    </div>
                </div>
            </article>

        </section>
    )
}
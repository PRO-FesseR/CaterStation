import OrbitingItems from "@/components/main-website/Vendor ShowCase/Orbiting Circles";

import vendor1 from '@/public/dummy vendors/vendor1.jpg'
import vendor2 from '@/public/dummy vendors/vendor2.jpg'
import vendor3 from '@/public/dummy vendors/vendor3.jpg'
import vendor4 from '@/public/dummy vendors/vendor4.jpg'
import vendor5 from '@/public/dummy vendors/vendor5.jpg'
import {dancing_Script} from "@/fonts/googleFonts";

const images = [vendor1,vendor1 ,vendor2,vendor3, vendor4,vendor5]

export default function VendorShowcase(){
    return(
        <section className="bg-white overflow-x-hidden h-auto md:h-screen flex md:flex-row flex-col w-full  px-10  gap-0 md:gap-20 md:py-0 py-32  justify-around items-center">
            <article className="flex flex-col w-full md:w-[40%]">
                <h2 className={`${dancing_Script.className} text-[var(--color-accent-brand-blue)] md:text-7xl md:text-left text-center  text-4xl`}>Find the Best Vendors in Pakistan</h2>
                <p className="mt-10 font-light md:text-left text-center ">At Caterstation, we have handpicked the finest event management vendors of Pakistan
                    who can confidently uplift your events by delivering exceptional services tailored to your event needs.</p>
            </article>
            <div className="relative  h-[50%]">
            <OrbitingItems items={images} radius={50}/>
            </div>
        </section>
    )
}




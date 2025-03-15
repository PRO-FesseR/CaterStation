import OrbitingItems from "@/components/body/Vendor ShowCase/Orbiting Circles";
import Image from "next/image";
import vendor1 from '@/public/dummy vendors/vendor1.jpg'
import vendor2 from '@/public/dummy vendors/vendor2.jpg'
import vendor3 from '@/public/dummy vendors/vendor3.jpg'
import vendor4 from '@/public/dummy vendors/vendor4.jpg'
import vendor5 from '@/public/dummy vendors/vendor5.jpg'
import {dancing_Script} from "@/fonts/googleFonts";

const images = [vendor1,vendor1 ,vendor2,vendor3, vendor4,vendor5]

export default function VendorShowcase(){
    return(
        <section className="bg-white h-screen flex w-full px-12 gap-14 justify-center items-center">
            <article className="flex flex-col w-[50%]">
                <h2 className={`${dancing_Script.className} text-7xl `}>Find the Best Vendors in Pakistan</h2>
                <p className="mt-10 font-light">At Caterstation, we have handpicked the finest event management vendors of Pakistan
                    who can confidently uplift your events by delivering exceptional services tailored to your event needs.</p>
            </article>
            <div className="relative w-full h-[50%]">
            <OrbitingItems items={images} radius={50}/>
            </div>
        </section>
    )
}




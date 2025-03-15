import HeroSection from "@/components/body/Hero/Hero-Section";
import Services from "@/components/body/Sevices/Services";
import Tutorial from "@/components/body/HowItWorks/Tutorial";
import VendorShowcase from "@/components/body/Vendor ShowCase/vendorShowcase";


export default function BodyPage(){
    return (
        <main className='bg-white'>
            <div>
                <HeroSection/>
               <Services/>
                <Tutorial/>
            </div>
                <VendorShowcase/>


        </main>
    )
}
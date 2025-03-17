import HeroSection from "@/components/main-website/Hero/Hero-Section";
import Services from "@/components/main-website/Sevices/Services";
import Tutorial from "@/components/main-website/HowItWorks/Tutorial";
import VendorShowcase from "@/components/main-website/Vendor ShowCase/vendorShowcase";
import CaterStationCities from "@/components/main-website/cater-Station-Cities/cater-station-cities";
import {Testimonial} from "@/components/main-website/Testimonial/testimonial";
import FooterSection from "@/components/main-website/footerSection/footer";




export default function BodyPage(){
    return (
        <main className='bg-white'>
            <div>
                <HeroSection/>
               <Services/>
                <Tutorial/>
            </div>
                <VendorShowcase/>

            <CaterStationCities/>
                <Testimonial/>
                <FooterSection/>
        </main>

    )
}
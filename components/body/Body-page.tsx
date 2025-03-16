import HeroSection from "@/components/body/Hero/Hero-Section";
import Services from "@/components/body/Sevices/Services";
import Tutorial from "@/components/body/HowItWorks/Tutorial";
import VendorShowcase from "@/components/body/Vendor ShowCase/vendorShowcase";
import CaterStationCities from "@/components/body/cater-Station-Cities/cater-station-cities";
import {Testimonial} from "@/components/body/Testimonial/testimonial";
import FooterSection from "@/components/body/footerSection/footer";




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
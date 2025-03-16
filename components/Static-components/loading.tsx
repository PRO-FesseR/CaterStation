


import Image from "next/image";
import CaterStationLogo from "@/public/logo/cater-station-hat.png";


export default function LoadingDefault() {
    return (
        <div className="loading-container">
            <h1 className="loading-title">
                <Image className="scale-75" src={CaterStationLogo} alt="Cater Station logo" />

            </h1>
            <RippleWaveLoader />
        </div>
    );
}

const RippleWaveLoader = () => {
    return (
        <div className="loader-container">
            <div className="dot" style={{ animationDelay: "0s" }}></div>
            <div className="dot" style={{ animationDelay: "0.5s" }}></div>
            <div className="dot" style={{ animationDelay: "1s" }}></div>
        </div>
    );
};
// ClientWrapper.tsx
"use client";
import { useEffect, useState } from "react";
import LoadingDefault from "@/components/Static-components/loading";


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoaded(true);
        } else {
            const handleLoad = () => setIsLoaded(true);
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!isLoaded) {
        return (
            <div className="flex justify-center bg-[var(--color-accent-brand-yellow)] items-center min-h-screen">
                <LoadingDefault/>

            </div>
        );
    }

    return <>{children}</>;
}

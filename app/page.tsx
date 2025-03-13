import { ReactLenis } from 'lenis/react';
import Hero from "@/components/body/Hero/hero-page";

export default function Home() {
  return (
      <ReactLenis root className="z-50">
          <Hero/>
      </ReactLenis>

  );
}
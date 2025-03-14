import { ReactLenis } from 'lenis/react';
import BodyPage from "@/components/body/Body-page";

export default function Home() {
  return (
      <ReactLenis root className="z-50">
          <BodyPage/>
      </ReactLenis>

  );
}
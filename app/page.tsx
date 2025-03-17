import { ReactLenis } from 'lenis/react';
import BodyPage from "@/components/main-website/Body-page";
import ClientWrapper from "@/components/loading-wrapper/ClientWrapper";

export default async function Home() {

  return (
      <ReactLenis root className="z-50">
          <ClientWrapper>
          <BodyPage/>
          </ClientWrapper>
      </ReactLenis>

  );
}
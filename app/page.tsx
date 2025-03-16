import { ReactLenis } from 'lenis/react';
import BodyPage from "@/components/body/Body-page";
import ClientWrapper from "@/components/body/ClientWrapper";

export default async function Home() {

  return (
      <ReactLenis root className="z-50">
          <ClientWrapper>
          <BodyPage/>
          </ClientWrapper>
      </ReactLenis>

  );
}
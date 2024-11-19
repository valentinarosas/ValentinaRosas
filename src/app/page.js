import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import WelcomePopup from "@/components/WelcomePopup";
import TopNav from "@/components/TopNav";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src="/images/HighresScreenshot00002.png"
        alt="Dunach environment background"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-40 saturate-[0.85] brightness-[0.95] contrast-[0.95] blur-[2px]"
      />

      {/* Logo and Navigation */}
      <div className="absolute top-4 left-4 z-50 flex items-center">
        <Image
          src="/images/vrlogo.png"
          alt="VR Logo"
          width={50}
          height={50}
          priority
          className="w-auto h-auto"
        />
        <TopNav />
      </div>

      <WelcomePopup />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}

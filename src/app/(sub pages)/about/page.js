import Image from "next/image";
import AboutDetails from "@/components/about";
import ItemLayout from "@/components/about/ItemLayout";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src="/images/HighresScreenshot00002.png"
        priority
        sizes="100vw"
        alt="Dunach environment background"
        width={1920}
        height={1080}
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30 saturate-[0.8] brightness-90 contrast-90 blur-[4px]"
      />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-start pt-10 sm:pt-14 gap-6">
        <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-accent/30 shadow-glass-sm">
          <Image
            src="/images/headshot.jpg"
            alt="Valentina Rosas headshot"
            fill
            className="object-cover"
            sizes="(max-width: 256px) 100vw, 256px"
            priority
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-accent">
            Valentina Rosas
          </h1>
          <p className="font-light text-foreground text-lg mt-2">
            XR Designer
          </p>
        </div>

        <div className="w-full px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
          <ItemLayout className="col-span-full flex-col items-start">
            <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
              Get to Know Me
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
              Hello, my name is Valentina Rosas, and I&apos;m an XR designer who specializes in 3D modeling, material design, environment design, and conceptual design all to create amazing immersive experiences. I was born and raised in Venezuela, and moved to the United States with my family at the age of 12. I&apos;m extremely grateful to now have the opportunity to follow my creative path thanks to my parents&apos; sacrifice of leaving everything in my home country behind.

              Now 9 years later, I&apos;m pursuing a Bachelor&apos;s in Immersive Reality at the Savannah College of Art and Design. I couldn&apos;t be happier with my decision. In my free time, I enjoy taking on new disciplines and growing mentally, physically, and spiritually. For example, with my love for painting, Brazilian jiujitsu, salsa dancing, playing video games, as well as reading. My goal is to create unique interactive experiences that represent who I am as a creative. One of my most valued traits is being a problem solver, as I believe this skill is based on building resilience to face every obstacle in your life and adapting to change. Thank you for getting to know a bit about me!
            </p>
          </ItemLayout>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}

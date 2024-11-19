import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src="/images/HighresScreenshot00002.png"
        alt="Dunach environment background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30 saturate-[0.8] brightness-90 contrast-90 blur-[4px]"
        priority
        width={1920}
        height={1080}
        sizes="100vw"
        quality={100}
      />

      <ProjectList projects={projectsData} />
    </>
  );
}

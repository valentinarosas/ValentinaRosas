import Image from "next/image";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Let's Work Together!",
};

export default function Contact() {
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

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let's Work Together!
          </h1>
        </div>
        <Form />
      </article>
    </>
  );
}

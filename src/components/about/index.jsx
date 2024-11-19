import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full"}>
          <h3 className="text-xl font-semibold text-accent mb-4">XR & Design Tools</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <img
              className="h-12"
              src={`https://skillicons.dev/icons?i=js,python,threejs,unity,vscode`}
              alt="development tools"
              loading="lazy"
            />
            <img
              className="h-12"
              src={`https://skillicons.dev/icons?i=unreal,blender,figma`}
              alt="game engine and 3D tools"
              loading="lazy"
            />
            <div className="flex gap-6 items-center">
              <img
                src="/images/mayalogo.png"
                alt="Maya"
                className="h-12 w-12 object-contain"
              />
              <img
                src="/images/SDlogo.png"
                alt="Substance Designer"
                className="h-12 w-12 object-contain"
              />
              <img
                src="/images/PTlogo.png"
                alt="Substance Painter"
                className="h-12 w-12 object-contain"
              />
              <img
                src="/images/aelogo.png"
                alt="After Effects"
                className="h-12 w-12 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="Photoshop"
                className="h-12 w-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
                alt="Premiere Pro"
                className="h-12 w-12"
              />
            </div>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-8 text-accent !justify-start"}
        >
          <Link
            href="/contact"
            className="inline-block capitalize text-lg md:text-xl font-semibold hover:text-accent hover:scale-[1.05] transition-all ease duration-200"
          >
            Let's Work Together! &rarr;
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

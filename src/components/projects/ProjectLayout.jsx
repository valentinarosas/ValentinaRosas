import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = motion(Link);
const ProjectLayout = ({ name, description, date, image, link }) => {
  return (
    <ProjectCard
      href={link}
      variants={item}
      className="group w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg transition-all duration-300
                hover:shadow-[0_0_15px_rgba(254,254,91,0.3)] hover:ring-2 hover:ring-accent hover:ring-opacity-50"
    >
      <div className="flex flex-col space-y-4">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col space-y-2 relative pt-1">
          <h2 className="text-foreground text-xl font-semibold group-hover:text-accent transition-colors duration-300">{name}</h2>
          <p className="text-muted text-sm">{date}</p>
          
          {/* Project Details Text */}
          <div className="absolute bottom-0 right-0">
            <div className="flex items-center gap-2 border border-muted/40 rounded-lg px-4 py-2 group-hover:border-accent transition-colors duration-300">
              <span className="text-base font-medium text-muted group-hover:text-accent transition-colors duration-300">Project Details</span>
              <ArrowUpRight size={20} className="text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </ProjectCard>
  );
};

export default ProjectLayout;

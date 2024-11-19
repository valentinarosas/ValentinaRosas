"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const TopNav = () => {
  return (
    <div className="flex items-center space-x-6 ml-6">
      <Link
        href="/projects"
        className="text-foreground hover:text-accent transition-colors duration-200 text-sm"
      >
        Projects
      </Link>
      <Link
        href="/about"
        className="text-foreground hover:text-accent transition-colors duration-200 text-sm"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-foreground hover:text-accent transition-colors duration-200 text-sm"
      >
        Contact
      </Link>
    </div>
  );
};

export default TopNav;

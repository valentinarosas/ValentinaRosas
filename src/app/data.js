/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "SCAD Pro X Universal Creative",
    description: "Professional design and creative work",
    image: "/images/SCADProxUniversalGraphic.png",
    date: "March 2024",
    link: "/projects/scad-pro-universal/password",
    isProtected: true
  },
  {
    id: 2,
    name: "The Last Circus",
    description: "Immersive circus experience",
    image: "/images/circusbg.png",
    date: "March 2024",
    link: "/projects/last-circus"
  },
  {
    id: 3,
    name: "Zephyrion",
    description: "Interactive digital experience",
    image: "/images/zephyr.png",
    date: "March 2024",
    link: "/projects/zephyrion"
  },
  {
    id: 4,
    name: "Dunach",
    description: "Digital art and visualization",
    image: "/images/HighresScreenshot00002.png",
    date: "March 2024",
    link: "/projects/dunach"
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/valentina-rosas-2348a3297/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Valentina-Rosas-Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

import React from "react";
import Timeline from "./Timeline";
import Internships from "./Internships";

// Experience Icons
import canvaIcon from "../assets/icons/experience-icons/canva-icon.svg";
import cssIcon from "../assets/icons/experience-icons/css-icon.svg";
import tailIcon from '../assets/icons/experience-icons/tailwind-icon.svg'
import figmaIcon from "../assets/icons/experience-icons/figma-icon.svg";
import githubIcon from "../assets/icons/experience-icons/github-icon.svg";
import htmlIcon from "../assets/icons/experience-icons/html-icon.svg";
import nodeIcon from "../assets/icons/experience-icons/node-icon.svg";
import notionIcon from "../assets/icons/experience-icons/notion-icon.svg";
import pythonIcon from "../assets/icons/experience-icons/python-icon.svg";
import reactIcon from "../assets/icons/experience-icons/react-icon.svg";
import rstudioIcon from "../assets/icons/experience-icons/rstudio-icon.svg";
import tsIcon from "../assets/icons/experience-icons/ts-icon.svg";
import vscodeIcon from "../assets/icons/experience-icons/vscode-icon.svg";
import wixIcon from "../assets/icons/experience-icons/wix-icon.svg";

// School Icons
import risLogo from '../assets/icons/school-icons/ris-logo.svg';
import cndLogo from '../assets/icons/school-icons/cnd-logo.svg';
import maitriseLogo from '../assets/icons/school-icons/mnd-logo.svg';
import sevenMLogo from '../assets/icons/school-icons/seven-mills-logo.png';

// Internship Icons
import digetoIcon from '../assets/icons/internship-icons/digeto-logo.svg';
import takIcon from '../assets/icons/internship-icons/taktime-logo.svg';
import domitysIcon from '../assets/icons/internship-icons/domitys-logo.svg';
import ensiIcon from '../assets/icons/internship-icons/ensicaen-logo.svg';

// Gradients
import lShapeGradient from '../assets/patterns/lshapedgrad.svg';

interface InternshipItem {
    year: string;
    title: string;
    description?: string;
    logo?: string;
}

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  logo?: string;
}

const Past: React.FC = () => {
  const icons = [
    reactIcon,     // Primary framework
    tsIcon,        // Key technology (TypeScript)
    tailIcon,      // TailwindCSS for styling
    htmlIcon,      // Core front-end skill
    cssIcon,       // Styling expertise
    nodeIcon,      // Back-end or full-stack capability
    pythonIcon,    // General-purpose programming language
    githubIcon,    // Collaboration and version control
    vscodeIcon,    // Development environment
    rstudioIcon,   // Roblox studio
    figmaIcon,     // Design collaboration
    notionIcon,    // Organization and project management
    canvaIcon,     // Visual design support
    wixIcon,       // Alternate web-building experience
  ];

  const internshipData: InternshipItem[] = [
    {
        year: "2021",
        title: "ENSI Caen",
        description: "Observation",
        logo: ensiIcon
    },
    {
        year: "2022",
        title: "Domitys",
        description: "Observation",
        logo: domitysIcon
    },
    {
        year: "2023",
        title: "Taktime",
        description: "Graphic design",
        logo: takIcon
    },
    {
        year: "2024",
        title: "Digeto",
        description: "Graphic design",
        logo: digetoIcon
    },
  ]

  const educationData: TimelineItem[] = [
    {
      date: "2013-2016",
      title: "Regent International School",
      description: "Dubai UAE",
      logo: risLogo,
    },
    {
      date: "2016-2018",
      title: "Seven Mills Primary School",
      description: "East London UK",
      logo: sevenMLogo,
    },
    {
      date: "2018-2022",
      title: "Collège Maîtrise Notre Dame",
      description: "Douvres la Délivrande FRA",
      logo: maitriseLogo,
    },
    {
      date: "2022-2025",
      title: "Lycée Cours Notre Dame",
      description: "Douvres la Délivrande FRA",
      logo: cndLogo,
    },
  ];

  return (
    <section>
      <div className="font-semibold text-xl pt-20 pl-20 pr-20 border-b-[0.5px] border-b-general-outline">
        <div className="flex pb-5">
          <h2 className="text-general-paragraphnum pr-1">[I]</h2>
          <h2 className="text-general-subtext">Past</h2>
        </div>
        <div className="relative bg-about-container mx-auto max-w-2xl rounded-tl-3xl rounded-tr-3xl border-t-[12px] border-x-[12px] pl-10 pt-10 pr-10 border-t-about-glasscontainer border-x-about-glasscontainer shadow-inner double-border">
          <div
            className="-top-5 left-0 absolute h-8 w-full bg-white opacity-70 rounded-tl-3xl rounded-tr-3xl filter blur-lg"
            style={{
              background:
                "linear-gradient(to right, #2C446B 0%, #5C698D 50%, #3DB1D0 100%)",
            }}
          ></div>
          <div
            className="top-0 -left-5 absolute h-full w-8 bg-white opacity-70 rounded-tl-3xl rounded-tr-3xl filter blur-lg"
            style={{
              background:
                "linear-gradient(to bottom, #2C446B 0%, #5C698D 50%, #3DB1D0 100%)",
            }}
          ></div>
          <div
            className="top-0 -right-5 absolute h-full w-8 bg-white opacity-70 rounded-tl-3xl rounded-tr-3xl filter blur-lg"
            style={{
              background:
                "linear-gradient(to bottom, #3DB1D0 0%, #5C698D 50%, #2C446B 100%)",
            }}
          ></div>
          <h2 className="text-general-subtext">About me</h2>
          <p className="text-general-paragraphtext font-light text-sm">
          I’m Julius, a 17-year-old high-school student from 🇫🇷, passionate about clean code, design, and efficient solutions.

I aspire to excel in 🤖 AI, 📋 project management, and collaborating with top software companies.

Outside coding, I enjoy 🏉, the Premier League ⚽, and staying active. <span className="italic">“Discipline is the bridge between goals and accomplishment.”</span>

          </p>
          <div className="py-4 grid grid-cols-7 gap-0">
            {icons.map((Icon, index) => (
              <div key={index} className="">
                <img
                  src={Icon}
                  alt={`Icon ${index + 1}`}
                  className="h-14 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-3 text-general-subtext flex justify-center">
        <div className="border-l-[0.5px] border-b-[0.5px] border-l-general-outline border-b-general-outline py-5 px-5 w-1/2">
          <h2 className="text-lg font-semibold pb-4">Education</h2>
          <Timeline items={educationData} />
        </div>
        <div className="relative py-5 px-5 w-1/2 bg-internships-sectionbg overflow-hidden">
        <img className="absolute bottom-20 w-140 h-auto blur-2xl" src={lShapeGradient} alt="" />
          <h2 className="text-lg font-bold">Internships</h2>
            <Internships items={internshipData} />
        </div>
      </div>
    </section>
  );
};

export default Past;
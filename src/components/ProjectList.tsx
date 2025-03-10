import React, { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import patternBg from "../assets/patterns/patternbg.svg";

import tak1 from "../assets/projects/tak-proj-1.png";
import tak2 from "../assets/projects/tak-proj-2.png";
import chien1 from "../assets/projects/chiens-proj-1.png";
import chien2 from "../assets/projects/chiens-proj-2.png";
import dig1 from "../assets/projects/dig-proj-1.png";
import dig2 from "../assets/projects/dig-proj-2.png";
import lyc1 from "../assets/projects/cnd-proj-1.png";
import lyc2 from "../assets/projects/cnd-proj-2.png";
import cswi1 from "../assets/projects/cswitch-proj-1.png";
import cswi2 from "../assets/projects/cswitch-proj-2.png";
import odd1 from "../assets/projects/oddg-proj-1.png";
import odd2 from "../assets/projects/oddg-proj-2.png";
import flow1 from "../assets/projects/flow-proj-1.png";
import flow2 from "../assets/projects/flow-proj-2.png";
import mac1 from "../assets/projects/mac-proj-1.png";
import mac2 from "../assets/projects/mac-proj-2.png";

interface Project {
  id: number;
  title: string;
  year: number;
  status: "pending" | "ongoing" | "done";
  descriptionEn: string;
  descriptionFr: string;
  colour: string;
  client: string;
  ressources: string[];
  location: string;
  link: string;
  img1: string;
  img2: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FLOWIVATE",
    year: 2025,
    status: "pending",
    descriptionEn:
      "I am creating FLOWIVATE, a productivity dashboard designed to help users manage their daily life more effectively. With features like Pomodoro timers, task management, book tracking, and focus mode, I aim to provide a simple and empowering tool to boost discipline and productivity.",
    descriptionFr:
      "Je suis en train de créer FLOWIVATE, un tableau de bord de productivité conçu pour aider les utilisateurs à gérer leur vie quotidienne plus efficacement. Avec des fonctionnalités telles que le minuteur Pomodoro, la gestion des tâches, le suivi des livres et le mode concentration, j'ai pour objectif de fournir un outil simple et efficace pour stimuler la discipline et la productivité.",    
    colour: "#779FE5",
    client: "Personal",
    ressources: ["TypeScript, React, Tailwind, HTML&CSS, Figma"],
    location: "France 🇫🇷",
    link: "https://github.com/julius-psc/flowivate",
    img1: flow1,
    img2: flow2,
  },
  {
    id: 2,
    title: "ODD GEMS",
    year: 2025,
    status: "ongoing",
    descriptionEn:
      "I am co-creating ODD GEMS, a Roblox hub designed to streamline major existing studio games into a unified experience. The platform features account creation and a seamless integration of games, providing users with a centralized space to explore and enjoy their favorite games in one place.",
      descriptionFr:
      "Je co-crée ODD GEMS, un hub Roblox conçu pour rationaliser les principaux jeux de studio existants en une expérience unifiée. La plateforme propose la création de comptes et une intégration transparente des jeux, offrant aux utilisateurs un espace centralisé pour explorer et profiter de leurs jeux préférés en un seul endroit.",    
    colour: "#1C6A2E",
    client: "Personal",
    ressources: ["Javascript, LUAU, Roblox Studio, Figma"],
    location: "France 🇫🇷",
    link: "N/A",
    img1: odd1,
    img2: odd2,
  },
  {
    id: 3,
    title: "TAKTIME",
    year: 2023,
    status: "done",
    descriptionEn:
      "I created social media posts and brainstormed the visual identity for TAKTIME, delivering a cohesive and engaging brand presence that aligned with the client’s vision.",
      descriptionFr:
      "J'ai créé des posts sur les médias sociaux et j'ai réfléchi à l'identité visuelle de TAKTIME, en fournissant une présence de marque cohérente et attrayante qui s'aligne sur la vision du client.",    
    colour: "#B23A27",
    client: "Deepak Peschard (CBO)",
    ressources: ["Figma", "Canva"],
    location: "Switzerland 🇨🇭",
    link: "https://taktime.io/",
    img1: tak1,
    img2: tak2,
  },
  {
    id: 4,
    title: "LYCEE CND",
    year: 2022,
    status: "done",
    descriptionEn:
      "I redesigned my highschool's website to enhance accessibility and improve its visual design. The goal was to create a more user-friendly and visually appealing platform that ensures a seamless experience for students, parents, and faculty alike.",
      descriptionFr:
      "J'ai remanié le site web de mon lycée pour en améliorer l'accessibilité et la conception visuelle. L'objectif était de créer une plateforme plus conviviale et visuellement attrayante qui garantisse une expérience transparente pour les élèves, les parents et le corps enseignant.",    
    colour: "#4EB5ED",
    client: "Personal",
    ressources: ["React", "Javascript, HTML&CSS, Figma"],
    location: "France 🇫🇷",
    link: "https://github.com/julius-psc/lycee-cnd",
    img1: lyc1,
    img2: lyc2,
  },
  {
    id: 5,
    title: "MACORNETTE",
    year: 2023,
    status: "done",
    descriptionEn:
      "I created a website for MACORNETTE, with a focus on both functionality and visual design for a pasta company operating under a cloud kitchen. The goal was to provide an engaging and user-friendly platform that highlights the brand’s unique offerings while maintaining a clean, professional aesthetic.",
      descriptionFr:
      "J'ai créé un site web pour MACORNETTE, en mettant l'accent à la fois sur la fonctionnalité et la conception visuelle pour une entreprise de pâtes opérant sous une cuisine en nuage. L'objectif était de fournir une plateforme attrayante et conviviale qui mette en valeur les offres uniques de la marque tout en conservant une esthétique propre et professionnelle.",    
    colour: "#B5A180",
    client: "Macornette",
    ressources: ["Wordpress, Figma"],
    location: "Switzerland 🇨🇭",
    link: "https://www.macornette.ch/",
    img1: mac1,
    img2: mac2,
  },
  {
    id: 6,
    title: "CSWITCH",
    year: 2022,
    status: "done",
    descriptionEn:
      "I co-created Colour Switch, a kid-friendly Roblox game that attracted over 4,000 visits. The focus was on creating an engaging and safe environment that emphasizes fun and interactive gameplay for young players.",
      descriptionFr:
      "J'ai co-créé Colour Switch, un jeu Roblox adapté aux enfants qui a attiré plus de 4 000 visites. L'accent a été mis sur la création d'un environnement attrayant et sûr qui met l'accent sur un jeu amusant et interactif pour les jeunes joueurs.",    
    colour: "#8F52BC",
    client: "Personal",
    ressources: ["LUAU, Roblox Studio, Figma, Canva"],
    location: "France 🇫🇷",
    link: "https://www.roblox.com/games/8219965802/Color-Switch",
    img1: cswi1,
    img2: cswi2,
  },
  {
    id: 7,
    title: "DIGETO",
    year: 2024,
    status: "done",
    descriptionEn:
      "I created a visually engaging PowerPoint presentation and social media posts for DIGETO, focusing on delivering clear and impactful messaging that effectively communicated the brand's message.",
      descriptionFr:
      "J'ai créé une présentation PowerPoint visuellement attrayante et des posts sur les médias sociaux pour DIGETO, en me concentrant sur la diffusion d'un message clair et percutant qui communique efficacement le message de la marque.",    
    colour: "#E78927",
    client: "Deepak Peschard (CEO)",
    ressources: ["Figma", "Canva"],
    location: "France 🇫🇷",
    link: "https://www.digeto.com/",
    img1: dig1,
    img2: dig2,
  },
  {
    id: 8,
    title: "CHIENS EN CAV",
    year: 2025,
    status: "ongoing",
    descriptionEn:
      "I  created the brand identity for CHIENS EN CAVALE and developed a fully functional website. In addition to designing a cohesive visual identity, I integrated a Google Calendar to enable seamless reservations for dog walking services, ensuring an efficient and user-friendly booking process for both pet owners and the team.",
      descriptionFr:
      "J'ai créé l'identité de marque de CHIENS EN CAVALE et développé un site web entièrement fonctionnel. En plus de concevoir une identité visuelle cohérente, j'ai intégré un calendrier Google pour permettre des réservations transparentes pour les services de promenades de chiens, assurant un processus de réservation efficace et convivial à la fois pour les propriétaires d'animaux et pour l'équipe.",    
    colour: "#F393B1",
    client: "Louisiana Richard (President)",
    ressources: ["Wix, Canva"],
    location: "France 🇫🇷",
    link: "https://louisianarichard.wixsite.com/chiens",
    img1: chien1,
    img2: chien2,
  },

  // ... more projects
];

const ProjectList: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null
  );
  const handleMouseEnter = (projectId: number) => {
    setExpandedProjectId(projectId);
  };

  const handleMouseLeave = () => {
    setExpandedProjectId(null);
  };

  //Translations
  const projectHeader = language === 'en' ? 'Projects' : 'Projets';

  return (
    <div className="">
      <div className="flex font-semibold text-xl pt-5 sm:pt-20 pl-5 sm:pl-20">
        <h2 className="text-general-paragraphnum pr-1">[II]</h2>
        <h2 className="text-general-subtext">{projectHeader}</h2>
      </div>
      <ul className="relative space-y-4 py-5 px-5 sm:px-20 mx-auto max-w-3xl">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`cursor-pointer px-3 sm:px-5 py-8 sm:py-6 rounded-md bg-about-container flex flex-col transition-all duration-700 ease-in-out ${
              expandedProjectId === project.id ? "h-[700px]" : "h-[110px]"
            }`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor:
                expandedProjectId === project.id ? project.colour : undefined,
              backgroundImage:
                expandedProjectId === project.id ? `url(${patternBg})` : "none",
            }}
          >
            <div className="flex items-center">
              <span className="text-general-subtext font-bold mr-1 sm:mr-4">
                {project.id.toString().padStart(2, "0")}
              </span>
              <div className="flex-grow">
                <h3
                  className={`text-3xl sm:text-6xl font-bold ${
                    expandedProjectId === project.id
                      ? "text-white"
                      : "text-general-maintext"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
              <span className="mr-2 hidden sm:visible text-white">{project.year}</span>
              <div className="relative w-5 h-5 mt-1 rounded-full">
                <div
                  className={`w-4 h-4 opacity-30 rounded-full absolute animate-ping ${
                    project.status === "pending"
                      ? "bg-projects-status-pending"
                      : project.status === "ongoing"
                      ? "bg-projects-status-ongoing"
                      : "bg-projects-status-done"
                  }`}
                ></div>
                <div
                  className={`w-3 h-3 absolute top-2 left-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    project.status === "pending"
                      ? "bg-projects-status-pending"
                      : project.status === "ongoing"
                      ? "bg-projects-status-ongoing"
                      : "bg-projects-status-done"
                  }`}
                ></div>
              </div>
            </div>
            {expandedProjectId === project.id && (
              <div
                className={`overflow-hidden mt-4 ${
                  expandedProjectId === project.id ? "text-white" : ""
                }`}
              >
                 {language === 'en' ? project.descriptionEn : project.descriptionFr} 
                <div className="flex mt-2">
                  <p className="text-general-subtle mr-1">client </p>
                  {project.client}
                </div>
                <div className="flex mt-2">
                  <p className="text-general-subtle visible sm:hidden mr-1">year </p>
                  {project.year}
                </div>
                <div className="flex">
                  <p className="text-general-subtle mr-1">ressources </p>
                  {project.ressources.join(", ")}
                </div>
                <div className="flex">
                  <p className="text-general-subtle mr-1">location </p>
                  {project.location}
                </div>
                <div className="flex">
                  <p className="text-general-subtle mr-1">link </p>
                  <a
                    className="hover:opacity-40 transition-opacity duration-200"
                    target="_blank"
                    href={project.link}
                  >
                    {project.link}
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      className=" hidden sm:block sm:max-w-full sm:max-h-full"
                      src={project.img1}
                      alt="project image 1"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className=" max-w-full smax-h-full"
                      src={project.img2}
                      alt="project image 2"
                    />
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

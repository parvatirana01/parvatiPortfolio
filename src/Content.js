// import images
import Hero_person from "./assets/images/Hero/parvati.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import bookstore from "./assets/images/projects/Screenshot 2025-04-03 150427.png";
import somethingyouneed from "./assets/images/projects/Screenshot 2025-04-03 150245.png";
import dreamnest from "./assets/images/projects/Screenshot 2025-04-03 171612.png";
import person_project from "./assets/images/projects/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiAwardLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#achievements",
      icon: RiAwardLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "PARVATI",
    // LastName: "",
    btnText: "View My Work",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Full Stack Projects Completed",
      },
      {
        count: "10+",
        text: "Technical Skills & Tools",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TECHNICAL EXPERTISE",
    skills_content: [
      {
        name: "Languages",
        para: "C/C++, Java, SQL, JavaScript, HTML/CSS",
        logo: reactjs,
      },
      {
        name: "Frameworks",
        para: "React.js, Node.js, Express.js, Bootstrap, Tailwind",
        logo: nodejs,
      },
      {
        name: "Databases",
        para: "MongoDB, SQL",
        logo: python,
      },
      {
        name: "Developer Tools",
        para: "Git, VS Code, Figma, Postman, Docker",
        logo: sketch,
      },
      {
        name: "Problem Solving",
        para: "LeetCode Top 6.9% Globally",
        logo: reactjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Achievements",
    subtitle: "MY ACCOMPLISHMENTS",
    service_content: [
      {
        title: "HackExpo Cybersecurity Competition",
        para: "Third Runner-up among 50 teams, securing 890 points in advanced security challenges including penetration testing, cryptography, and ethical hacking.",
        logo: services_logo1,
      },
      {
        title: "Yamaha Smart AI Hackathon 2.0 Finalist",
        para: "Developed an AI-powered Emotion Detection Application with 90%+ accuracy, showcasing exceptional problem-solving skills and technical proficiency.",
        logo: services_logo2,
      },
      {
        title: "LeetCode Badge Achiever",
        para: "Ranked in top 6.9% of LeetCoders globally by consistently solving problems over a span of 50+ days in 2024.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Somethingyouneed",
        description: "AI-powered emotion detection app with 90%+ accuracy using Next.js, Tailwind CSS, React, MongoDB, and Vercel",
        image: somethingyouneed,
        demo_link: "Demo",
      },
      {
        title: "Book Store Website",
        description: "Robust e-commerce system with MongoDB, ExpressJS, ReactJS, NodeJS, improving transaction processing by 25%",
        image: bookstore,
        demo_link: "Demo",
      },
      {
        title: "Dream Nest",
        description: "Real estate platform using MERN stack with 40% faster MongoDB Atlas query efficiency",
        image: dreamnest,
        demo_link: "Demo",
      },
    ],
  },
  Hireme: {
    title: "Let's Collaborate",
    subtitle: "FOR INNOVATIVE PROJECTS",
    image1: Hero_person,
    image2: Hero_person,
    para: "Passionate Computer Science Engineer with expertise in full-stack development, AI/ML, and problem-solving. Looking forward to contributing to challenging and innovative projects.",
    btnText: "Contact Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "parvati1367.be22@chitkarauniversity.edu.in",
        icon: GrMail,
        link: "mailto:parvati1367.be22@chitkarauniversity.edu.in",
      },
      {
        text: "+91-95881-33931",
        icon: MdCall,
        link: "tel:+919588133931",
      },
      {
        text: "linkedin.com/in/parvati-rana/",
        icon: BsLinkedin,
        link: "https://linkedin.com/in/parvati-rana/",
      },
      {
        text: "github.com/parvatirana01",
        icon: BsGithub,
        link: "https://github.com/parvatirana01",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};

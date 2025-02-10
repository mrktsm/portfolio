import { useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { MagicWord } from "./components/MagicWord.js";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { SiGooglecloud } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiOllama } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaRaspberryPi } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Spamurai",
      subtitle: "AI Email Companion",
      imageUrl: "/images/spamurai_white_2.png",
      description: "A full-stack web application with real-time features.",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <FaAws />, name: "AWS" },
      ],
      link: "https://github.com/mrktsm/spamurai",
    },
    {
      title: "Dermafyr",
      subtitle: "YCP '24 Winner",
      description: "A full-stack web application with real-time features.",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <IoLogoElectron />, name: "Electron" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiOllama />, name: "Ollama" },
        { icon: <GrMysql />, name: "MySQL" },
        { icon: <FaRaspberryPi />, name: "Raspberry Pi" },
      ],
      link: "https://github.com/mrktsm/dermafyr",
    },
    {
      title: "Climately",
      subtitle: "HackHarvard '24",
      imageUrl: "/images/climately-final.png",
      description: "A full-stack web application with real-time features.",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <PiOpenAiLogoLight />, name: "OpenAI" },
      ],
      link: "https://github.com/mrktsm/climately-extension",
    },
    {
      title: "Thesaurus Rex",
      subtitle: "Dictionary at a Click",
      imageUrl: "/images/trexpng-cover-2.png",
      description: "A full-stack web application with real-time features.",
      technologies: [
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      ],
      link: "https://github.com/mrktsm/thesaurus-rex",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fffbf2]">
      {/* Top Navigation */}
      <div className="absolute top-5 right-5 z-50">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-900 text-2xl focus:outline-none cursor-pointer md:hidden"
        >
          <RxHamburgerMenu />
        </button>

        {/* Animated Menu */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: isMenuOpen ? 0 : -30, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`absolute right-0 top-full mt-2 w-35 rounded-bl-lg -mr-5 shadow-lg py-2 border-x border-b border-gray-200 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#About"
            className="block px-4 py-2 text-green-900 hover:bg-green-50"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-green-900 hover:bg-green-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-green-900 hover:bg-green-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/markos-updated-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-green-900 hover:bg-green-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <a
            href="#About"
            className="text-green-900 text-md hover:text-green-600"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="text-green-900 text-md hover:text-green-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-green-900 text-md hover:text-green-600"
          >
            Contact
          </a>
          <a
            href="/markos-updated-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-900 text-md hover:text-green-600"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Full-Height Section */}
      <div
        id="About"
        className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 whitespace-nowrap"
      >
        <div className="flex flex-col items-center mt-6">
          <h1
            className="ml-2.5 text-green-900 mr-4 asset-regular tracking-tighter"
            style={{ fontSize: "calc(1.5vw + 1rem)" }}
          >
            Hi, I'm Marko!{" "}
          </h1>
        </div>
        <div
          className="text-sm md:text-lg text-green-950"
          style={{ fontSize: "calc(0.5vw + 0.4rem)" }}
        >
          <p>
            Software Developer and Computer Science student at Gettysburg
            College, crafting
          </p>
          <p>
            impactful software with React, Spring Boot, AI, and a touch of code{" "}
            <MagicWord />.
          </p>
        </div>
        <div className="absolute bottom-5 text-green-950 flex flex-col items-center text-sm">
          <p>all the good stuff</p>
          <a href="#projects">
            <BsArrowDown className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        id="projects"
        className={`w-full px-8 py-16 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold text-green-950 text-left mb-6 sm:text-lg">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:text-xs">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              key={index}
              className={`flex flex-col items-start transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {project.imageUrl ? (
                <div className="w-full aspect-video  border-3 border-green-900 transition-transform duration-300 hover:bg-amber-50">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video  border-3 border-green-900 hover:bg-amber-50 flex items-center justify-center transition-transform duration-300">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-950 to-green-700 inter-300">
                    {project.title}
                  </h3>
                </div>
              )}
              <div className="flex flex-row justify-between items-center w-full">
                <span className="flex flex-row justify-center items-center">
                  <h3 className="text-left text-sm font-semibold text-green-950 mt-4 mr-2">
                    {project.title}
                  </h3>
                  <h3 className="text-left text-sm text-green-950 mt-4">|</h3>
                  <h3 className="text-left text-sm text-green-950 mt-4 ml-2">
                    {project.subtitle}
                  </h3>
                </span>
                <div className="flex flex-wrap justify-center gap-2 mt-4 text-lg">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="relative group">
                      <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 -top-8 whitespace-nowrap">
                        {tech.name}
                      </span>
                      <span className="text-green-950 group-hover:text-green-700 text-sm">
                        {tech.icon}{" "}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-left mt-24">
          <p className="text-md text-green-950">
            Want to see more projects? Check out{" "}
            <a
              href="https://github.com/mrktsm"
              target="_blank"
              className=" text-green-800 hover:text-green-600"
            >
              my GitHub
            </a>
            !
          </p>
        </div>
      </div>
      <div id="contact" className="bg-green-950 text-amber-50 pb-40 mt-12">
        <div className=" text-amber-50 mt-12">
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex justify-between items-start w-full">
              <div className="text-left">
                <h2 className="text-sm mt-10 mb-4">Contact me: </h2>
                <p className="text-sm mb-2">
                  <a
                    href="mailto:marko@example.com"
                    className="hover:text-green-300"
                  >
                    ➔ Email
                  </a>
                </p>
                <p className="text-sm mb-2">
                  <a
                    href="https://github.com/mrktsm"
                    target="_blank"
                    className="hover:text-green-300"
                  >
                    ➔ GitHub
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href="www.linkedin.com/in/marko-tsymbaliuk-55615430b"
                    target="_blank"
                    className="hover:text-green-300"
                  >
                    ➔ LinkedIn
                  </a>
                </p>
              </div>
              <div className="text-right">
                <h2 className="text-sm mt-10">
                  Runs on React and pure determination.{" : )"}
                </h2>
                <p className="text-sm mb-2">
                  <a
                    href="https://github.com/mrktsm/portfolio"
                    className="hover:text-green-300"
                  >
                    See the code on GitHub.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

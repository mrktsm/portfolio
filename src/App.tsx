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

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        { icon: <FaReact />, name: "React" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <PiOpenAiLogoLight />, name: "OpenAI" },
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
    <div className="bg-amber-50">
      {/* Top Navigation */}
      <div className="absolute top-5 right-5 flex space-x-6 z-50">
        <a
          href="#About"
          className="text-green-900 text-lg hover:text-green-600"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-green-900 text-lg hover:text-green-600"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-green-900 text-lg hover:text-green-600"
        >
          Contact
        </a>
        <a
          href="/markos-updated-resume.pdf"
          download="MarkoTsymbaliuk_Resume.pdf"
          className="text-green-900 text-lg hover:text-green-600"
        >
          Resume
        </a>
      </div>

      {/* Full-Height Section */}
      <div
        id="About"
        className="min-h-screen flex flex-col justify-center items-center text-center relative"
      >
        <div className="flex flex-row mt-6">
          <h1 className="ml-13 text-6xl text-green-800 mr-4 asset-regular tracking-tighter">
            Hi, I'm Marko!{" "}
          </h1>
        </div>
        <div className="text-lg text-green-950 mt-6">
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
          <p>the good stuff</p>
          <a href="#projects">
            <BsArrowDown className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        id="projects"
        className={`w-full px-8 py-16 max-w-5xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl text-green-950 font-bold text-left mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                <div className="w-full aspect-video bg-amber-50 border-3 border-green-800 transition-transform duration-300 hover:bg-amber-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-amber-50 border-3 border-green-800 hover:bg-amber-100 flex items-center justify-center transition-transform duration-300">
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-500 inter-300">
                    {project.title}
                  </h3>
                </div>
              )}
              <div className="flex flex-row justify-between items-center w-full">
                <span className="flex flex-row justify-center items-center">
                  <h3 className="text-left text-lg font-semibold text-green-950 mt-4 mr-2">
                    {project.title}
                  </h3>
                  <h3 className="text-left text-lg text-green-950 mt-4">|</h3>
                  <h3 className="text-left text-md text-green-950 mt-4 ml-2">
                    {project.subtitle}
                  </h3>
                </span>
                <div className="flex flex-wrap justify-center gap-2 mt-4 text-lg">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="relative group">
                      <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 -top-8">
                        {tech.name}
                      </span>
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-left mt-24">
          <p className="text-lg text-green-950">
            Want to see more projects? Check out{" "}
            <a
              href="https://github.com/mrktsm"
              target="_blank"
              className="text-lg text-green-800 hover:text-green-600"
            >
              my GitHub
            </a>
            !
          </p>
        </div>
      </div>
      <div id="contact" className="bg-green-950 text-amber-50 pb-40 mt-12">
        <div className="bg-green-950 text-amber-50 mt-12">
          <div className="max-w-5xl mx-auto px-8">
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
                    href="https://linkedin.com/in/markotsymbaliuk"
                    target="_blank"
                    className="hover:text-green-300"
                  >
                    ➔ LinkedIn
                  </a>
                </p>
              </div>
              <div className="text-right">
                <h2 className="text-sm -mr-3 mt-10">
                  Powered by React and more code than I want to admit {" : )"}
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

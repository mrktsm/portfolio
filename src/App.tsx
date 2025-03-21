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
import { DiRedis } from "react-icons/di";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "CodeCafe",
      subtitle: "Collaborative Code Editor",
      imageUrl: "/images/codecafe-final-png-green-1.png",
      screenshot: "/images/codecafe-rounded.jpg",
      description: "A full-stack web application with real-time features.",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        {
          icon: <DiRedis size={22} className="-mt-1 -mx-0.5" />,
          name: "Redis",
        },
        { icon: <GrMysql />, name: "MySQL" },
        { icon: <FaAws />, name: "AWS" },
      ],
      link: "https://github.com/mrktsm/codecafe",
    },
    {
      title: "Spamurai",
      subtitle: "AI Email Companion",
      imageUrl: "/images/spamurai-test-cover-3.png",
      screenshot: "/images/spamurai-rounded.jpg",
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
      screenshot: "/images/dermafyr-rounded.jpg",
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
      imageUrl: "/images/climately-final-cover-4.png",
      screenshot: "/images/climately-ss.png",
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
      imageUrl: "/images/trexpng-cover-8.png",
      screenshot: "/images/trex-rounded.jpg",
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
            href="/MarkoResume.pdf"
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
            // href="/markos-updated-resume.pdf"
            href="/MarkoResume.pdf"
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
            className="ml-3 text-green-900 mr-4 asset-regular tracking-tighter scale-y-[150%]"
            style={{ fontSize: "calc(1.5vw + 1rem)" }}
          >
            Hi, I'm Marko!{" "}
          </h1>
        </div>
        <div
          className=" text-green-950 "
          style={{ fontSize: "calc(0.65vw + 0.4rem)" }}
        >
          <p>
            Computer Science student and Economics Minor at Gettysburg College,
            making
          </p>
          <p>
            cool things happen with React, Spring Boot, AI, and a touch of code{" "}
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
        className={`w-full px-4 md:px-8 py-16 max-w-full md:max-w-[63%] mx-auto transform transition-all duration-1000 md:min-w-[1025px] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold text-green-950 text-left mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
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
              <div className="w-full aspect-video max-h-[400px] border-[2.5px] border-green-900 relative group overflow-hidden">
                <div className="w-full h-full border-0.5 border-green-900 relative overflow-hidden transition-transform duration-300 hover:bg-amber-50">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover duration-500 hidden md:block"
                    />
                  )}
                  {project.screenshot && (
                    <img
                      src={project.screenshot}
                      alt={`${project.title} Screenshot`}
                      className="w-full h-full object-cover absolute top-0 left-0 block md:transition-opacity md:duration-500 md:group-hover:opacity-100"
                    />
                  )}
                  {!project.imageUrl && (
                    <div className="w-full h-full flex items-center justify-center">
                      <h3 className="text-[clamp(2.7rem,10vw,3vw)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-950 to-green-600 open-sans-300 text-center px-4">
                        {project.title}
                      </h3>
                    </div>
                  )}

                  {/* Shine effect */}
                  {/* <div className="absolute top-0 -left-[200%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-500 ease-in-out" /> */}
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="flex flex-wrap gap-y-2 items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-green-950">
                      {project.title}
                    </h3>
                    <span className="text-green-950">|</span>
                    <h3 className="text-xs sm:text-sm text-green-950">
                      {project.subtitle}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="relative group">
                        <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 -top-8 whitespace-nowrap z-10">
                          {tech.name}
                        </span>
                        <span className="text-green-950 group-hover:text-green-700 text-xs sm:text-sm">
                          {tech.icon}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-left mt-24">
          <p className="text-md  text-green-950">
            Want to see more projects? Check out{" "}
            <a
              href="https://github.com/mrktsm"
              target="_blank"
              className="text-green-800 hover:text-green-600"
            >
              my GitHub
            </a>
            !
          </p>
        </div>
      </div>

      {/* Contact Section - Improved mobile layout */}
      <div id="contact" className="bg-green-950 text-amber-50 pb-40 mt-12">
        <div className="mt-12">
          <div className="max-w-full md:max-w-[62.5%] mx-auto px-4 md:px-8 md:min-w-[1025px]">
            <div className="flex flex-col sm:flex-row justify-between items-start w-full space-y-6 sm:space-y-0">
              <div className="text-left w-full sm:w-auto">
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
                    href="https://www.linkedin.com/in/marko-tsymbaliuk-55615430b/"
                    target="_blank"
                    className="hover:text-green-300"
                  >
                    ➔ LinkedIn
                  </a>
                </p>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <h2 className="text-sm mt-10">Built with React.</h2>
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

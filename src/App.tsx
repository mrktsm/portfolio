import { useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { MagicWord } from "./components/MagicWord.js";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/mrktsm/spamurai",
    },
    {
      title: "Spamurai",
      imageUrl: "src/assets/images/spamurai_white_2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/mrktsm/spamurai",
    },
    {
      title: "Dermafyr",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/mrktsm/spamurai",
    },
    {
      title: "Climately",
      imageUrl: "src/assets/images/climately-final.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/mrktsm/spamurai",
    },
    {
      title: "Thesaurus Rex",
      imageUrl: "src/assets/images/trexpng-cover.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/mrktsm/spamurai",
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
      <div className="absolute top-5 right-5 flex space-x-6">
        <a
          href="#about"
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
          href="#Contact"
          className="text-green-900 text-lg hover:text-green-600"
        >
          Contact
        </a>
        <a
          href="#Resume"
          className="text-green-900 text-lg hover:text-green-600"
        >
          Resume
        </a>
      </div>

      {/* Full-Height Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative">
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
        className={`w-full px-8 py-16 max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl text-green-950 font-bold text-left mb-6">
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
                <div className="w-full aspect-video bg-amber-50 border-2 border-green-800 transition-transform duration-300">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-amber-50 border-2 border-green-800 flex items-center justify-center transition-transform duration-300">
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-300 inter-300">
                    {project.title}
                  </h3>
                </div>
              )}
              <h3 className="text-left text-2xl text-green-950 mt-4">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

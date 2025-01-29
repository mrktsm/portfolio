import { BsArrowDown } from "react-icons/bs";
import { MagicWord } from "./components/MagicWord.js";

const App = () => {
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
        <h1
          className="text-9xl text-green-800"
          style={{ fontFamily: "Hooey-Regular" }}
        >
          Hi, I'm Marko!
        </h1>
        <div className="text-lg text-green-950 mt-4">
          <p>
            Software Developer and Computer Science student at Gettysburg
            College,
          </p>
          <p>
            crafting impactful software with React, Spring Boot, AI, and a touch
            of code <MagicWord />.
          </p>
        </div>

        {/* Arrow Fixed to Bottom of Viewport */}
        <div className="absolute bottom-5 text-green-950 flex flex-col items-center text-sm">
          <p>for the good stuff</p>
          <a href="#projects">
            <BsArrowDown className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-full px-8 py-16">
        <h2 className="text-3xl text-green-950 font-bold text-left mb-15 max-w-6xl mx-auto">
          Projects
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Wrapper div for centering odd items */}
          <div
            className={`${
              projects.length % 2 !== 0
                ? "md:col-start-1 md:col-end-3 md:grid md:grid-cols-2 md:gap-16"
                : ""
            }`}
          >
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                key={index}
                className={`flex flex-col items-center ${
                  projects.length % 2 !== 0 && index === projects.length - 1
                    ? "md:col-start-1 md:col-end-2 md:justify-self-end"
                    : ""
                }`}
              >
                {/* Project card content remains the same */}
                {project.imageUrl ? (
                  <div className="w-full aspect-video bg-amber-50 border-2 border-green-800 transition-transform duration-300 hover:scale-95">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-amber-50 border-2 border-green-800 flex items-center justify-center transition-transform duration-300 hover:scale-95">
                    <h3
                      className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-300 inter-300"
                      style={{ fontFamily: "Inter" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                )}
                <h3 className="text-2xl text-green-950 mt-4">
                  {project.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { BsArrowDown } from "react-icons/bs";
import { MagicWord } from "./components/MagicWord.js";

const App = () => {
  const projects = [
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "CodeCafe",
      imageUrl: "src/assets/images/codecafe2.png",
      description: "A full-stack web application with real-time features.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
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
        {/* Heading */}
        <h2 className="text-3xl text-green-950 font-bold text-left mb-15 max-w-6xl mx-auto">
          Projects
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-video bg-amber-50 border-2 border-green-800 transition-transform duration-300 hover:scale-105">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl text-green-950 mt-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

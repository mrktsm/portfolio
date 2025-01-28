import { MagicWord } from "./components/MagicWord.js";
import { BsArrowDown } from "react-icons/bs";

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-amber-50">
      <div className="absolute top-5 right-5 flex space-x-6">
        <a
          href="#about"
          className="text-green-800 text-lg font-semibold hover:text-green-600"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-green-800 text-lg font-semibold hover:text-green-600"
        >
          Projects
        </a>
        <a
          href="#resume"
          className="text-green-800 text-lg font-semibold hover:text-green-600"
        >
          Resume
        </a>
        <a
          href="#Contact"
          className="text-green-800 text-lg font-semibold hover:text-green-600"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <span
          className="text-9xl text-green-600 inline-block"
          style={{ fontFamily: "Hooey-Regular" }}
        >
          Hi, I'm Marko!
        </span>
        <span className="text-lg font-semibold text-green-800 flex flex-col items-center">
          <p>
            A full-stack developer and Computer Science student at Gettysburg
            College,
          </p>
          <p>
            crafting impactful software with React, Spring Boot, AI, and a touch
            of code <MagicWord />.
          </p>
        </span>
      </div>

      {/* Bottom Content */}
      <div className="text-green-800 flex flex-col items-center mb-5">
        <p>for the good stuff</p>
        <BsArrowDown className=" text-3xl" />
      </div>
    </div>
  );
};

export default App;

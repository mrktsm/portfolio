import { MagicWord } from "./components/MagicWord.js";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
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
          crafting impactful software with React, AI, and a touch of code{" "}
          <MagicWord />
        </p>
      </span>
    </div>
  );
};

export default App;

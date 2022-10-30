import React from "react";

function Intro() {
  return (
    <section
      id="intro"
      className="flex items-center justify-center pt-20 pb-6 flex-col"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Joakim Berglind
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Fullstack Web Developer
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          I love building web apps from the ground up and making it into
          reality! I come from a bootcamp background and I have always had a huge passion
          for tech, even before my new career in coding. Visit my{" "}
          <a
            href="https://github.com/Joberg95"
            target="_blank"
            className="text-cyan-600 hover-underline decoration-2 underline-offset-2 decoration-red-600"
          >
            {" "}
            GitHub{" "}
          </a>
          for more projects and source code!
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          You can download my Resume{" "}
          <a
            href=""
            className="text-cyan-600 hover-underline decoration-2 underline-offset-2 decoration-red-600"
          >
            Here
          </a>
        </p>
      </div>
    </section>
  );
}

export default Intro;

// File: src/components/Hero.tsx

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const profileURL = "https://avatars.githubusercontent.com/u/33443357?v=4";

export const Hero = () => {
  return (
    <section className="text-center space-y-4">
      <img
        src={profileURL}
        alt="Vaibhav's profile"
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold">Vaibhav Kasaudhan</h1>

      {/* Typing effect */}
      <div className="text-lg text-blue-500">
        <Typewriter
          options={{
            strings: [
              "Software License Manager",
              "React and Python Dev",
              "Tech Support Engineer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        A tech enthusiast aiming to work in dynamic organizations where I can apply my software and hardware troubleshooting knowledge, grow in a cloud or DevOps-focused role, and contribute to modern IT systems. Having 2+ years of experience in software licensing, tech support & cloud infra. Strong skills in React, Python & system administration.
      </p>

      <div className="space-x-4 mt-4">
        <a href="https://github.com/Mr-vabs" target="_blank" rel="noreferrer">
          <FaGithub className="inline text-2xl" />
        </a>
        <a href="https://linkedin.com/in/vebhv" target="_blank" rel="noreferrer">
          <FaLinkedin className="inline text-2xl" />
        </a>
      </div>
    </section>
  );
};
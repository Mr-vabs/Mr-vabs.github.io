import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaMoon, FaSun } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark bg-slate-900 text-white" : "bg-yellow-50 text-gray-900"}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg"
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <Particles
        id="tsparticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#ccc" }
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
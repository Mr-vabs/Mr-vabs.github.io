import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { EducationAchievements } from "./components/EducationAchievements";
import { Footer } from "./components/Footer";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fallback to system theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    // Save theme to local storage when it changes
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Explicitly add or remove the 'dark' class on the HTML element
    // This is required when Tailwind is configured with darkMode: 'class'
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // If the user hasn't explicitly set a preference in local storage, follow system preference
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div
      className={
        darkMode ? "bg-slate-900 text-white min-h-screen" : "bg-yellow-50 text-gray-900 min-h-screen"
      }
    >

      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-yellow-300 rounded-full shadow-lg ring-2 ring-gray-300 dark:ring-yellow-400 hover:scale-110 transition active:scale-95 touch-manipulation"
        aria-label="Toggle theme"
        data-aos="fade-left" data-aos-delay="10"
      >
        {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </button>

      {particlesInit && (
        <Particles
          key={darkMode ? "dark" : "light"}
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              color: { value: darkMode ? "#ffffff" : "#000000" },
              number: { value: 80 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              opacity: { value: darkMode ? 0.3 : 0.2 },
              links: {
                enable: true,
                color: darkMode ? "#ffffff" : "#000000",
                opacity: darkMode ? 0.3 : 0.2
              }
            }
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12 relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationAchievements />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface Project {
  title: string;
  live: string;
  repo: string;
}

export const Projects = () => {
  const tiltRefs = useRef<HTMLDivElement[]>([]);

  const projects: Project[] = [
    { title: "Random Anime App", repo: "https://github.com/Mr-vabs/get-random-anime", live: "https://mr-vabs.github.io/get-random-anime/" },
    { title: "Fitness Landing Page", repo: "https://github.com/Mr-vabs/fitness-website", live: "https://mr-vabs.github.io/fitness-website/" },
    { title: "App Landing React", repo: "https://github.com/Mr-vabs/app-landing", live: "https://mr-vabs.github.io/app-landing/" },
    { title: "Recipe App", repo: "https://github.com/Mr-vabs/RecipeApp", live: "https://mr-vabs.github.io/RecipeApp" },
    { title: "Bootstrap Website", repo: "https://github.com/Mr-vabs/opsite", live: "https://mr-vabs.github.io/opsite/" },
    { title: "Appointments Demo Site", repo: "https://github.com/Mr-vabs/vbtutes", live: "https://vebhv2vbtutes.pythonanywhere.com/" },
    { title: "Chat App [BaatKarlo]", repo: "https://github.com/Mr-vabs/baatkarlo", live: "https://vebhvv.pythonanywhere.com/" },
    { title: "ERP System [SkoolVerse]", repo: "https://github.com/Mr-vabs/ERP", live: "http://grouperp.pythonanywhere.com/" },
    { title: "Django Poll App", repo: "https://github.com/Mr-vabs/pollsite", live: "https://vebhv2pollapps.pythonanywhere.com/" },
    { title: "Apps Showcase", repo: "https://github.com/Mr-vabs/apps", live: "https://mr-vabs.github.io/apps/" },
    { title: "Tshippo", repo: "https://github.com/Mr-vabs/tshippo", live: "https://thippo.netlify.app/" },
    { title: "LoveFile", repo: "https://github.com/Mr-vabs/LoveFile", live: "https://lobshare.netlify.app/" },
  ];

  useEffect(() => {
    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  return (
    <section className="glass-card">
      <h2 className="text-2xl font-semibold mb-4">
        <i className="fas fa-project-diagram"></i> Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.title}
            ref={(el) => {
              if (el) tiltRefs.current[i] = el;
            }}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {p.title}
            </h3>
            <div className="text-blue-500 text-sm space-x-3">
              <a href={p.repo} target="_blank" rel="noreferrer" className="hover:underline">
                Repo
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="hover:underline">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
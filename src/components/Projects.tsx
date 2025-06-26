import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface Project {
  title: string;
  live: string;
  repo: string;
  summary: string;
  order: number;
}

export const Projects = () => {
  const tiltRefs = useRef<HTMLDivElement[]>([]);

  const projects: Project[] = [
    {
      title: "Personal Developer Portfolio",
      repo: "https://github.com/Mr-vabs/mr-vabs.github.io",
      live: "https://mr-vabs.github.io/",
      summary:
        "Responsive portfolio built with React, Tailwind CSS and deployed on GitHub Pages. Includes dark mode, particle background, and project showcase.",
      order: 1
    },
    {
      title: "Random Anime App",
      repo: "https://github.com/Mr-vabs/get-random-anime",
      live: "https://mr-vabs.github.io/get-random-anime/",
      summary:
        "React app fetching random anime using API with dynamic filters and responsive UI.",
      order: 8
    },
    {
      title: "Fitness Landing Page",
      repo: "https://github.com/Mr-vabs/fitness-website",
      live: "https://mr-vabs.github.io/fitness-website/",
      summary:
        "Static landing page for a fitness brand using HTML/CSS and modern layout.",
      order: 7
    },
    {
      title: "App Landing React",
      repo: "https://github.com/Mr-vabs/app-landing",
      live: "https://mr-vabs.github.io/app-landing/",
      summary:
        "Responsive app landing page developed in React with Tailwind UI.",
      order: 4
    },
    {
      title: "Recipe App",
      repo: "https://github.com/Mr-vabs/RecipeApp",
      live: "https://mr-vabs.github.io/RecipeApp",
      summary:
        "Displays recipes with filtering and category search using React, API and Bootstrap.",
      order: 9
    },
    {
      title: "Bootstrap Website",
      repo: "https://github.com/Mr-vabs/opsite",
      live: "https://mr-vabs.github.io/opsite/",
      summary:
        "Basic responsive website template created using Bootstrap for practice.",
      order: 10
    },
    {
      title: "Appointments Demo Site",
      repo: "https://github.com/Mr-vabs/vbtutes",
      live: "https://vebhv2vbtutes.pythonanywhere.com/",
      summary:
        "Django-based appointment booking system with simple UI and form validation.",
      order: 11
    },
    {
      title: "Chat App [BaatKarlo]",
      repo: "https://github.com/Mr-vabs/baatkarlo",
      live: "https://vebhvv.pythonanywhere.com/",
      summary:
        "Real-time chat application with Django Channels and WebSocket support.",
      order: 2
    },
    {
      title: "ERP System [SkoolVerse]",
      repo: "https://github.com/Mr-vabs/ERP",
      live: "http://grouperp.pythonanywhere.com/",
      summary:
        "ERP prototype for school operations including student, staff, and course modules.",
      order: 3
    },
    {
      title: "Django Poll App",
      repo: "https://github.com/Mr-vabs/pollsite",
      live: "https://vebhv2pollapps.pythonanywhere.com/",
      summary:
        "Simple voting app developed in Django for polls and survey creation.",
      order: 12
    },
    {
      title: "Apps Showcase",
      repo: "https://github.com/Mr-vabs/apps",
      live: "https://mr-vabs.github.io/apps/",
      summary:
        "Gallery of mini applications built with HTML/CSS and embedded previews.",
      order: 13
    },
    {
      title: "Tshippo",
      repo: "https://github.com/Mr-vabs/tshippo",
      live: "https://thippo.netlify.app/",
      summary:
        "Frontend clown and UI testing of minimal file sharing interface to upload, view, and share files anonymously comedy edition using React and Netlify.",
      order: 5
    },
    {
      title: "LoveFile",
      repo: "https://github.com/Mr-vabs/LoveFile",
      live: "https://lobshare.netlify.app/",
      summary:
        "Minimal file sharing interface to upload, view, and share files anonymously.",
      order: 6
    }
  ];

  const sortedProjects = projects.sort((a, b) => a.order - b.order);

  useEffect(() => {
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2
        });
      }
    });
  }, []);
  return (
    <section className="glass-card">
      {" "}
      <h2 className="text-2xl font-semibold mb-4">
        {" "}
        <i className="fas fa-project-diagram"></i> Projects{" "}
      </h2>{" "}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {sortedProjects.map((p, i) => (
          <div
            key={p.title}
            ref={el => {
              if (el) tiltRefs.current[i] = el;
            }}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {" "}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {" "}
              {p.title}{" "}
            </h3>{" "}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {" "}
              {p.summary}{" "}
            </p>{" "}
            <div className="text-blue-500 text-sm space-x-3">
              {" "}
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {" "}
                Repo{" "}
              </a>{" "}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {" "}
                  Live{" "}
                </a>
              )}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

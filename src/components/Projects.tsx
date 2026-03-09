import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface Project {
  title: string;
  live: string;
  repo: string;
  summary: string;
  why?: string;
  order: number;
}

export const Projects = () => {
  const tiltRefs = useRef<HTMLDivElement[]>([]);

  const projects: Project[] = [
    {
      title: "ChatPress",
      repo: "https://github.com/Mr-vabs/baatkarlo",
      live: "https://vebhvv.pythonanywhere.com/",
      summary:
        "Developed a Django-based project integrating a Telegram bot for streamlined communication and automated task handling, utilizing Git and GitHub for version control in a Linux-compatible environment.",
      why: "Created to explore Telegram API integration with Django for automating communication and task management workflows.",
      order: 1
    },
    {
      title: "Business Oriented Program (Server Training)",
      repo: "",
      live: "",
      summary:
        "Created a forest with Windows Server and promoted as DC/ADC as per given config. Connected client machines, checked DNS lookups, and managed AD user groups for amplified access management.",
      why: "Developed as a practical exercise to build a robust Windows Server infrastructure with Active Directory integration.",
      order: 2
    },
    {
      title: "Personal Developer Portfolio",
      repo: "https://github.com/Mr-vabs/mr-vabs.github.io",
      live: "https://mr-vabs.github.io/",
      summary:
        "Responsive portfolio built with React, Tailwind CSS and deployed on GitHub Pages. Includes dark mode, particle background, and project showcase.",
      why: "Built to showcase my projects, skills, and experience in a modern, interactive web application.",
      order: 3
    },
    {
      title: "Random Anime App",
      repo: "https://github.com/Mr-vabs/get-random-anime",
      live: "https://mr-vabs.github.io/get-random-anime/",
      summary:
        "React app fetching random anime using API with dynamic filters and responsive UI.",
      why: "Developed to practice working with external REST APIs, state management in React, and building dynamic user interfaces.",
      order: 8
    },
    {
      title: "Fitness Landing Page",
      repo: "https://github.com/Mr-vabs/fitness-website",
      live: "https://mr-vabs.github.io/fitness-website/",
      summary:
        "Static landing page for a fitness brand using HTML/CSS and modern layout.",
      why: "Created to enhance my CSS and responsive web design skills by building a visually appealing landing page.",
      order: 7
    },
    {
      title: "App Landing React",
      repo: "https://github.com/Mr-vabs/app-landing",
      live: "https://mr-vabs.github.io/app-landing/",
      summary:
        "Responsive app landing page developed in React with Tailwind UI.",
      why: "Built to experiment with Tailwind CSS utility classes and modern React component structures.",
      order: 4
    },
    {
      title: "Recipe App",
      repo: "https://github.com/Mr-vabs/RecipeApp",
      live: "https://mr-vabs.github.io/RecipeApp",
      summary:
        "Displays recipes with filtering and category search using React, API and Bootstrap.",
      why: "Developed to combine React with Bootstrap for rapid UI development and to handle complex API data filtering.",
      order: 9
    },
    {
      title: "Bootstrap Website",
      repo: "https://github.com/Mr-vabs/opsite",
      live: "https://mr-vabs.github.io/opsite/",
      summary:
        "Basic responsive website template created using Bootstrap for practice.",
      why: "Created as an foundational exercise to master Bootstrap grid systems and components.",
      order: 10
    },
    {
      title: "Appointments Demo Site",
      repo: "https://github.com/Mr-vabs/vbtutes",
      live: "https://vebhv2vbtutes.pythonanywhere.com/",
      summary:
        "Django-based appointment booking system with simple UI and form validation.",
      why: "Built to understand Django's ORM, forms, and server-side validation for booking systems.",
      order: 11
    },
    {
      title: "ERP System [SkoolVerse]",
      repo: "https://github.com/Mr-vabs/ERP",
      live: "http://grouperp.pythonanywhere.com/",
      summary:
        "ERP prototype for school operations including student, staff, and course modules.",
      why: "Developed to tackle a larger-scale Django application with multiple interconnected modules and user roles.",
      order: 5
    },
    {
      title: "Django Poll App",
      repo: "https://github.com/Mr-vabs/pollsite",
      live: "https://vebhv2pollapps.pythonanywhere.com/",
      summary:
        "Simple voting app developed in Django for polls and survey creation.",
      why: "Created to learn the fundamentals of Django views, models, and template rendering.",
      order: 12
    },
    {
      title: "Apps Showcase",
      repo: "https://github.com/Mr-vabs/apps",
      live: "https://mr-vabs.github.io/apps/",
      summary:
        "Gallery of mini applications built with HTML/CSS and embedded previews.",
      why: "Built as a consolidated hub to easily showcase and share various mini-projects.",
      order: 13
    },
    {
      title: "Tshippo",
      repo: "https://github.com/Mr-vabs/tshippo",
      live: "https://thippo.netlify.app/",
      summary:
        "Frontend clown and UI testing of minimal file sharing interface to upload, view, and share files anonymously comedy edition using React and Netlify.",
      why: "Developed as a fun side project to test UI interactions and deploy a fast React app on Netlify.",
      order: 6
    },
    {
      title: "LoveFile",
      repo: "https://github.com/Mr-vabs/LoveFile",
      live: "https://lobshare.netlify.app/",
      summary:
        "Minimal file sharing interface to upload, view, and share files anonymously.",
      why: "Created to focus on a clean, minimal user interface for a specific utility purpose.",
      order: 7
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
      <h2 className="text-2xl font-semibold mb-4">
        <i className="fas fa-project-diagram"></i> Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((p, i) => (
          <div
            key={p.title}
            ref={el => {
              if (el) tiltRefs.current[i] = el;
            }}
            className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-all hover:shadow-md flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-grow">
              {p.summary}
            </p>
            {p.why && (
              <div className="mt-2 mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800/50">
                <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">
                  <i className="fas fa-lightbulb mr-1"></i> Why this project?
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 italic">
                  {p.why}
                </p>
              </div>
            )}
            <div className="text-blue-500 text-sm space-x-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  <i className="fab fa-github mr-1"></i> Repo
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

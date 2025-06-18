interface Project {
  title: string;
  live: string;
  repo: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Random Anime App",
      repo: "https://github.com/Mr-vabs/get-random-anime",
      live: "https://mr-vabs.github.io/get-random-anime/",
    },
    {
      title: "Fitness Landing Page",
      repo: "https://github.com/Mr-vabs/fitness-website",
      live: "https://mr-vabs.github.io/fitness-website/",
    },
    {
      title: "App Landing React",
      repo: "https://github.com/Mr-vabs/app-landing",
      live: "https://mr-vabs.github.io/app-landing/",
    },
    {
      title: "Recipe App",
      repo: "https://github.com/Mr-vabs/RecipeApp",
      live: "https://mr-vabs.github.io/RecipeApp",
    },
    {
      title: "Bootstrap Website",
      repo: "https://github.com/Mr-vabs/opsite",
      live: "https://mr-vabs.github.io/opsite/",
    },
    {
      title: "Appointments Demo Site",
      repo: "https://github.com/Mr-vabs/vbtutes",
      live: "https://vebhv2vbtutes.pythonanywhere.com/",
    },
    {
      title: "Chat App [BaatKarlo]",
      repo: "https://github.com/Mr-vabs/baatkarlo",
      live: "https://vebhvv.pythonanywhere.com/",
    },
    {
      title: "ERP System [SkoolVerse]",
      repo: "https://github.com/Mr-vabs/ERP",
      live: "http://grouperp.pythonanywhere.com/",
    },
    {
      title: "Django Poll App",
      repo: "https://github.com/Mr-vabs/pollsite",
      live: "https://vebhv2pollapps.pythonanywhere.com/",
    },
    {
      title: "Apps Showcase",
      repo: "https://github.com/Mr-vabs/apps",
      live: "https://mr-vabs.github.io/apps/",
    },
    {
      title: "Tshippo",
      repo: "https://github.com/Mr-vabs/tshippo",
      live: "https://thippo.netlify.app/",
    },
    {
      title: "LoveFile",
      repo: "https://github.com/Mr-vabs/LoveFile",
      live: "https://lobshare.netlify.app/",
    },
    // { title: "ToDo Node App", repo: "https://github.com/Mr-vabs/todo-node", live: "https://vabsnode.herokuapp.com/" },
    // { title: "FreeCodeCamp", repo: "https://github.com/Mr-vabs/FreeCodeCamp", live: "https://mr-vabs.github.io/FreeCodeCamp/" },
    // { title: "Django API - Employee", repo: "https://github.com/Mr-vabs/djAPI", live: "" },
    // { title: "Webkul UI", repo: "https://github.com/Mr-vabs/webkul", live: "https://mr-vabs.github.io/webkul/" },
    // { title: "Python Scripts", repo: "https://github.com/Mr-vabs/python-script", live: "https://mr-vabs.github.io/python-script/" },
  ];

  return (
    <section className="glass-card">
      <h2 className="text-2xl font-semibold mb-4">
        <i className="fas fa-project-diagram"></i> Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-black dark:text-white">
              {p.title}
            </h3>
            <div className="text-blue-500 mt-2 text-sm">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mr-3"
              >
                Repo
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">
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

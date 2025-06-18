export const Skills = () => {
  const skills: string[] = [
    "React Js",
    "Python",
    "Cloud Infra",
    "Linux Admin",
    "License Compliance",
    "Git",
    "Excel",
    "C",
    "O365 License",
    "Remote Support",
    "Data Analysis",
    "CSS",
    "Pivot Tables",
    "ITIL",
    "Desktop Support",
  ];

  return (
    <section className="glass-card">
      <h2 className="text-2xl font-semibold mb-4">
        <i className="fas fa-code"></i> Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-red-100 dark:bg-red-800 dark:text-white text-red-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

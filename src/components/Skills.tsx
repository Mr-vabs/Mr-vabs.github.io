export const Skills = () => {
  const skills: string[] = [
    "React Js",
    "Python",
    "ITIL",
    "C",
    "MS Office",
    "License Compliance",
    "Git",
    "Microsoft Power BI",
    "CSS",
    "Linux Admin",
    "Cloud Infra",
    "Powershell",
    "Pivot Tables",
    "Data Analysis",
    "Remote Support",
    "Technical Support"
  ];

  return (
    <section className="glass-card" data-aos="fade-right" data-aos-delay="150">
      <h2 className="text-2xl font-semibold mb-4">
        <i className="fas fa-code"></i> Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
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

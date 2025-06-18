// File: src/components/Achievements.tsx

export const Achievements = () => (
  <section className="glass-card">
    <h2 className="text-2xl font-semibold mb-4">
      <i className="fas fa-trophy"></i> Achievements
    </h2>
    <ul className="list-disc list-inside space-y-2 text-sm">
      <li>
        <strong>Hacktoberfest 2021–22:</strong> Created 6 valid pull requests
        and earned official swag.
      </li>
      <li>
        <strong>Google IT Support Specialization:</strong> Completed core
        modules including system admin, networking, and troubleshooting.
      </li>
      <li>
        <strong>Linux Essentials:</strong> Configured CentOS 8 & Ubuntu, used
        command line, set permissions.
      </li>
      <li>
        <strong>Python & Web Dev:</strong> Created Django and Node apps,
        deployed to Heroku & PythonAnywhere.
      </li>
      <li>
        <strong>Languages:</strong> English (80%), Hindi (100%)
      </li>
    </ul>
  </section>
);

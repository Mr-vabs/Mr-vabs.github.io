import { FaDownload } from "react-icons/fa";

const educationList = [
  {
    degree: "Bachelor of Computer Applications",
    institution:
      "Mohyal Educational and Research Institute of Technology, New Delhi",
    year: "2025 – 2028"
  },
  {
    degree: "Three Years Diploma in Computer Science & Engineering",
    institution:
      "Government Polytechnic Aadampur Tarabganj Gonda, Uttar Pradesh",
    year: "2019 – 2022"
  }
];

const achievements = [
  "Hacktoberfest Contributor (2021, 2022, 2023) – submitted 6+ PRs per year and received official swag.",
  "Completed Google IT Support Specialization: Core system admin, networking & troubleshooting modules.",
  "Hands-on experience with Kali, Arch & Ubuntu Linux – user & permission management via CLI.",
  "Built & deployed full-stack projects using Django, React, and Node on Heroku and PythonAnywhere.",
  "Languages: Fluent in English and Hindi."
];

export const EducationAchievements = () => (
  <section className="glass-card" data-aos="fade-down" data-aos-delay="50">
    <h2 className="text-2xl font-semibold mb-6">
      <i className="fas fa-graduation-cap"></i> Education & Achievements
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Education</h3>
        <ul className="space-y-3 text-sm">
          {educationList.map((edu, i) => (
            <li key={i}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {edu.institution}
              </p>
              <p className="text-xs text-gray-500">{edu.year}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Achievements</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          {achievements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Optional: Resume download link */}

        <div className="mt-6">
          <a
            href="/Vaibhav_Kasaudhan_Resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

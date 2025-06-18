const experienceList = [
  {
    title: "Senior Executive – Microland Ltd (Apr 2024 – Present)",
    client: "Client: Maruti Suzuki India Ltd",
    responsibilities: [
      "Handled software license management, procurement approvals, and installation requests.",
      "Executed compliance checks and internal audits using Snow License Manager & SCCM reports.",
      "Flagged unauthorized or cracked software installs; initiated uninstall procedures.",
      "Delivered SOP & compliance trainings to reduce installation errors and improve audit readiness.",
      "Generated reports for CIO/CSO level audits, collaborating with security, desktop, and asset teams.",
    ],
  },
  {
    title: "System Administrator – Wipro Ltd (Nov 2022 – Jan 2024)",
    client: "Client: ICICI Bank",
    responsibilities: [
      "Managed 200+ desktops/laptops in Active Directory/Domain Controller environments.",
      "Performed OS and software installations, remote troubleshooting (L1/L2 level), and patch updates.",
      "Worked with SCCM, RDP, and internal tools to resolve infra issues and monitor compliance.",
      "Assisted in new joiner setups, policy updates, group creation, and Outlook/O365 provisioning.",
      "Documented SOPs and mentored junior engineers in system troubleshooting and escalation procedures.",
    ],
  },
];

export const Experience = () => (
  <section className="glass-card">
    <h2 className="text-2xl font-semibold mb-4">
      <i className="fas fa-briefcase"></i> Experience
    </h2>
    <div className="space-y-6 text-sm">
      {experienceList.map((job, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-base">{job.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{job.client}</p>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

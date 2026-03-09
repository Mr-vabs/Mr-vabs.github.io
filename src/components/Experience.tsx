const experienceList = [
  {
    title: "Senior Executive - Asset Management & IT Operations (Apr 2024 - Present)",
    client: "Microland Limited (Client: Maruti Suzuki) Gurgaon, India",
    responsibilities: [
      "Cost Optimization: Proactively audited and reclaimed inactive enterprise software (Adobe, AutoCAD), executing no-dues license transfers that resulted in ~20% direct cost savings. Removed 100+ unused licenses prior to renewal cycles.",
      "Tool Development & Automation: Architected a custom Django/Python-based Software Catalog Web Portal hosted on a Linux environment to streamline service requests. Engineered custom Bash and PowerShell scripts to automate local/remote SCCM deployments, eliminating critical IT bottlenecks.",
      "Enterprise Asset Governance: Replaced fragmented trackers with a centralized Power BI dashboard managing over 2M+ rows of installation data, ensuring absolute visibility and audit readiness for ITOS-G assets.",
      "Compliance & Risk Mitigation: Successfully resolved complex vendor compliance issues by gathering concrete system evidence, ensuring zero audit penalties and strict adherence to organizational policies.",
      "Engineer Enablement: Reduced incorrect software installations by 80% by completely streamlining the end-to-end service request workflow and conducting training for L1 Engineers."
    ],
  },
  {
    title: "System Administrator - Technical Support (Nov 2022 - Jan 2024)",
    client: "Wipro Limited (Client: ICICI Bank) Mumbai, India",
    responsibilities: [
      "Configured and managed a Domain Controller (DC) and Additional Domain Controller (ADC), connecting client machines for high availability and redundancy across the network.",
      "System Administration: Executed OS deployments, security patch management, and application updates across mixed server and client environments, successfully reducing overall system downtime by 30%.",
      "ITSM & Desktop Support: Managed the end-to-end lifecycle of IT incidents and service requests using enterprise ticketing tools, consistently meeting strict SLAs for 350+ critical Dealing Room users via Teams and onsite assistance.",
      "Managed user profiles, group policies, and ensured secure Remote Desktop Protocol (RDP) access for remote employees.",
      "Provided technical support for 200+ systems, resolving application and system issues.",
      "Contributed to asset replacement and system compliance activities, improving overall system efficiency and reducing incident resolution time."
    ],
  },
];

export const Experience = () => (
  <section className="glass-card" data-aos="fade-up" data-aos-delay="100">
    <h2 className="text-2xl font-semibold mb-6">
      <i className="fas fa-briefcase"></i> Experience
    </h2>
    <div className="space-y-8">
      {experienceList.map((job, idx) => (
        <div key={idx} className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-all hover:shadow-md" data-aos="fade-up" data-aos-delay={idx * 100}>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{job.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">{job.client}</p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {job.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                  <i className="fas fa-check-circle text-xs"></i>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

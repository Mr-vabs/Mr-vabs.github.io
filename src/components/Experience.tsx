const experienceList = [ { title: "Senior Executive – Microland Ltd (Apr 2024 – Present)", client: "Client: Maruti Suzuki India Ltd", responsibilities: [ "Oversaw end-to-end software license lifecycle including procurement approvals, renewals, audits, and usage tracking for 6000+ endpoints.", "Standardized and documented SOPs across license request, deployment, and audit workflows to ensure compliance alignment.", "Collaborated with Asset, SCCM, and End User Support teams to streamline software request resolution and maintain inventory hygiene.", "Flagged unauthorized, and deprecated software, initiating remediation and process correction with security teams.", "Reduced unauthorized software installs by 80% through proactive training and automation of approval & installation workflows." ], }, { title: "System Administrator – Wipro Ltd (Nov 2022 – Jan 2024)", client: "Client: ICICI Bank", responsibilities: [ "Deployed and managed DC & ADC forest infrastructure with client machine integration, DNS/DHCP configs, and policy enforcement.", "Handled 20+ AD user profiles, group permissions, and RDP setups ensuring secure access for remote/hybrid employees.", "Resolved OS/application issues across 200+ systems, supporting 350+ critical Dealing Room users via Teams, phone, and onsite visits.", "Reduced downtime by 30% by automating patch updates, managing application deployment, and improving endpoint compliance.", "Assisted in infra compliance and asset lifecycle programs including replacements, audits, and escalation documentation." ], }, ];

export const Experience = () => (

  <section className="glass-card" data-aos="fade-up" data-aos-delay="100">
    <h2 className="text-2xl font-semibold mb-4">
      <i className="fas fa-briefcase"></i> Experience
    </h2>
    <div className="space-y-6 text-sm">
      {experienceList.map((job, idx) => (
        <div key={idx} className="aos-init aos-animate" data-aos="fade-up" data-aos-delay={idx * 100}>
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
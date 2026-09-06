import { motion } from "motion/react";

const experiences = [
  {
    company: "Wells Fargo",
    role: "Engineering Associate",
    employment: "Full-time",
    location: "United States • Hybrid",
    period: "Jul 2022 – Apr 2024",
    points: [
      "Managed and updated 100+ ServiceNow tickets monthly to support infrastructure changes, asset lifecycle activities, and IT governance processes.",
      "Collaborated with Data Center Hosting Services to coordinate hardware decommissioning, validate asset inventory, and document governance controls.",
      "Supported software testing and vulnerability remediation by documenting infrastructure changes, test results, and performance metrics in Confluence and Microsoft Excel.",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Software Engineer Intern",
    employment: "Internship • Load Balancer Team",
    location: "United States",
    period: "Jan 2022 – Jul 2022",
    points: [
      "Managed ServiceNow change tickets for network and configuration updates while maintaining accurate implementation documentation.",
      "Troubleshot and validated network connectivity using ping, nslookup, tracert, IP address verification, DNS, and CNAME records.",
      "Supported load balancer engineering activities related to application availability, traffic distribution, and reliable network operations.",
    ],
  },
  {
    company: "Amazon",
    role: "FC Associate I",
    employment: "Part-time",
    location: "Charlotte, North Carolina • On-site",
    period: "Jul 2021 – Jul 2022",
    points: [
      "Processed more than 200 online grocery orders daily with 99% accuracy in a fast-paced environment.",
      "Maintained 95% customer satisfaction by selecting quality products, reducing fulfillment errors, and meeting deadlines.",
      "Collaborated with Amazon and Whole Foods team members to meet operational goals while following quality and food safety standards.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-nude-600">
            Experience
          </p>

          <h2 className="section-title mt-3">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l border-nude-300 pl-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[2.45rem] top-2 h-4 w-4 rounded-full border-4 border-nude-50 bg-nude-600 dark:border-nude-900" />

              <div className="soft-shadow rounded-3xl border border-soft bg-surface p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-nude-600">
                  {experience.period}
                </p>

                <h3 className="font-heading mt-2 text-2xl font-bold">
                  {experience.role}
                </h3>

                <p className="mt-1 font-semibold text-muted">
                  {experience.company}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {experience.employment} • {experience.location}
                </p>

                <ul className="mt-5 space-y-3 text-muted leading-7">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-nude-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
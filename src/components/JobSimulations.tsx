import { motion } from "motion/react";

const simulations = [
  {
    company: "Wells Fargo",
    program: "Software Engineering Job Simulation",
    platform: "Forage",
    date: "July 16, 2026",
    points: [
      "Reviewed requirements for a financial portfolio management system.",
      "Identified the data needed to manage advisors, clients, portfolios, and securities.",
      "Created an entity relationship diagram to represent the data model.",
      "Implemented the data model in IntelliJ IDEA and published the project on GitHub.",
    ],
  },
  {
    company: "Verizon",
    program: "Cloud Platform Job Simulation",
    platform: "Forage",
    date: "November 2, 2025",
    points: [
      "Designed and evaluated a hypothetical VPN product for Verizon's cloud computing team.",
      "Used command-line Python to test redundancy, resiliency, and least-privilege principles.",
      "Researched application security practices and presented the findings in PowerPoint.",
    ],
  },
  {
    company: "GE Aerospace",
    program: "Explore Digital Technology Job Simulation",
    platform: "Forage",
    date: "October 12, 2024",
    points: [
      "Completed a Vue.js interface development simulation for a frontend development team.",
      "Used Vue SFC Playground to add headings, images, dynamic values, and a compute button.",
      "Prepared technical requirements for a feature that recommends the best time to order aircraft parts.",
      "Connected technical requirements with business needs to support an effective solution.",
    ],
  },
];

export default function JobSimulations() {
  return (
    <section id="job-simulations" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-3xl font-bold">
            Virtual Job Simulations
          </h2>

          <p className="mb-10 text-gray-600 dark:text-gray-300">
            Practical job simulations completed through Forage.
          </p>
        </motion.div>

        <div className="space-y-6">
          {simulations.map((simulation, index) => (
            <motion.article
              key={`${simulation.company}-${simulation.program}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold">
                    {simulation.company}
                  </h3>

                  <p className="font-medium text-blue-600 dark:text-blue-400">
                    {simulation.program}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {simulation.platform}
                  </p>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {simulation.date}
                </p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                {simulation.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
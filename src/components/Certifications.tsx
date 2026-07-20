import { motion } from "motion/react";
import { FiAward } from "react-icons/fi";

const certifications = [
  "CompTIA Security+",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Google IT Support Professional Certificate",
  "IBM Artificial Intelligence Fundamentals",
];

function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-nude-600">
            Certifications
          </p>
          <h2 className="section-title mt-3">Credentials supporting continuous growth.</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="soft-shadow rounded-3xl border border-soft bg-surface p-6"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-nude-200 text-xl text-nude-800 dark:bg-nude-800 dark:text-nude-100">
                <FiAward />
              </div>
              <h3 className="font-semibold leading-7">{certification}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

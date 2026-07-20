import { motion } from "motion/react";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-nude-100/65 py-24 dark:bg-nude-900/40">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-nude-600">
            Skills
          </p>
          <h2 className="section-title mt-3">Tools I use to build and solve.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -7 }}
              className="soft-shadow rounded-3xl border border-soft bg-surface p-6"
            >
              <h3 className="font-heading text-2xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-nude-200 px-3 py-1.5 text-sm text-nude-800 dark:bg-nude-800 dark:text-nude-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

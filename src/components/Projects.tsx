import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-nude-100/65 py-24 dark:bg-nude-900/40">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-nude-600">
              Projects
            </p>
            <h2 className="section-title mt-3">Selected work and experiments.</h2>
          </div>
          <a
            href="https://github.com/HaidaMarese"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-nude-600 hover:underline"
          >
            View all on GitHub
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="soft-shadow group overflow-hidden rounded-[2rem] border border-soft bg-surface"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-nude-200 via-nude-300 to-nude-400 p-7 dark:from-nude-800 dark:via-nude-700 dark:to-nude-600">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/35" />
                <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full border border-white/25" />
                <p className="relative font-heading text-3xl font-bold text-nude-900 dark:text-nude-50">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="p-7">
                <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
                <p className="text-muted mt-3 leading-7">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-soft px-3 py-1 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:text-nude-600"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target={project.live === "#" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:text-nude-600"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

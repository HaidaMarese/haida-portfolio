import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute -left-28 top-32 h-72 w-72 rounded-full bg-nude-300/35 blur-3xl" />

      <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-nude-400/25 blur-3xl" />

      <div className="section-shell grid items-center gap-14 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-nude-600">
            Hello, I&apos;m
          </p>

          <h1 className="font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Haida
            <br />
            Makouangou
          </h1>

          <p className="mt-5 text-2xl font-semibold sm:text-3xl">
            Software Engineer | Full-Stack • AI/ML
          </p>
          <p className="text-muted mt-3 max-w-xl text-base font-medium leading-8 sm:text-lg">
             Python • React • LLMs • RAG • Cloud
             </p>

          <p className="text-muted mt-6 max-w-2xl leading-8">
            Building practical, secure, and user-focused applications by combining full-stack development, 
            machine learning, generative AI, and enterprise technology experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-nude-800 px-6 py-3 font-semibold text-nude-50 transition duration-300 hover:-translate-y-1 hover:bg-nude-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-nude-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-nude-100 dark:hover:bg-nude-800"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-nude-300 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-nude-600"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="soft-shadow relative aspect-square overflow-hidden rounded-[2.5rem] border border-soft bg-nude-200">
            <img
              src="/profile.jpg"
              alt="Haida Makouangou"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 -z-10 grid place-items-center text-center text-nude-700">
              Add public/profile.jpg
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}

export default Hero;
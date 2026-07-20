import { motion } from "motion/react";
import { FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-nude-600">
              About me
            </p>
            <h2 className="section-title mt-3">Technology with purpose.</h2>
          </div>

          <div>
            <p className="text-muted text-lg leading-8">
              I am a Computer Science graduate from UNC Charlotte with a concentration in Artificial Intelligence, Gaming, and Robotics. 
              My background combines full-stack software development, machine learning, generative AI, enterprise technology, networking, and cloud computing. 
              I enjoy building practical solutions that solve real-world problems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  Icon: FiBookOpen,
                  label: "Education",
                  value: "B.S. Computer Science",
                },
                {
                  Icon: FiAward,
                  label: "Achievement",
                  value: "Cum Laude",
                },
                {
                  Icon: FiMapPin,
                  label: "Location",
                  value: "North Carolina",
                },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="soft-shadow rounded-3xl border border-soft bg-surface p-5"
                >
                  <Icon className="mb-4 text-2xl text-nude-600" />
                  <p className="text-muted text-sm">{label}</p>
                  <p className="mt-1 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

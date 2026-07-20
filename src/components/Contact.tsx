import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { FiMail, FiSend } from "react-icons/fi";

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-nude-800 py-24 text-nude-50">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-nude-300">
            Contact
          </p>
          <h2 className="font-heading mt-3 text-4xl font-bold sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-nude-200">
            I am open to software engineering, AI/ML, cloud, networking, and
            solutions engineering opportunities.
          </p>
          <a
            href="mailto:hmakouan06@gmail.com"
            className="mt-8 inline-flex items-center gap-3 font-semibold text-nude-100 hover:text-white"
          >
            <FiMail /> hmakouan06@gmail.com
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-nude-50 p-6 text-nude-900 soft-shadow sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Name
              <input
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-nude-300 bg-white px-4 py-3 outline-none transition focus:border-nude-600"
              />
            </label>

            <label className="text-sm font-semibold">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-nude-300 bg-white px-4 py-3 outline-none transition focus:border-nude-600"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold">
            Message
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full resize-none rounded-2xl border border-nude-300 bg-white px-4 py-3 outline-none transition focus:border-nude-600"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-nude-800 px-6 py-3 font-semibold text-nude-50 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiSend />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium">Your message was sent successfully.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-700">
              The form is not connected yet. Complete the EmailJS setup below or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

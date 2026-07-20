import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-nude-900 py-8 text-nude-200">
      <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Haida Makouangou. Built with React.
        </p>

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/HaidaMarese"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:-translate-y-1 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hmakouan/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:-translate-y-1 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:hmakouan06@gmail.com"
            aria-label="Email"
            className="transition hover:-translate-y-1 hover:text-white"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

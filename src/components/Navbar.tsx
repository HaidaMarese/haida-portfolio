import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DarkMode from "./DarkMode";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const links = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <nav className="section-shell flex h-18 items-center justify-between">
        <a href="#home" className="font-heading text-2xl font-bold">
          HM<span className="text-nude-600">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium transition hover:text-nude-600"
            >
              {link}
            </a>
          ))}
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-soft"
            aria-label="Open navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-soft px-4 py-5 md:hidden">
          <div className="section-shell flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

import { FiMoon, FiSun } from "react-icons/fi";

type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function DarkMode({ darkMode, setDarkMode }: DarkModeProps) {
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="grid h-10 w-10 place-items-center rounded-full border border-soft bg-surface transition hover:-translate-y-0.5"
      aria-label={darkMode ? "Use light mode" : "Use dark mode"}
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default DarkMode;

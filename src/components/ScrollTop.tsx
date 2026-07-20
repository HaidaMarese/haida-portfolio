import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-nude-800 text-nude-50 soft-shadow transition hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  );
}

export default ScrollTop;

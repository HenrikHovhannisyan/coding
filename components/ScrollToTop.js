"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 py-2 px-4 rounded-full cursor-pointer border border-teal-500 text-teal-400 bg-transparent hover:bg-teal-500 hover:text-white hover:border-transparent shadow-lg transition font-semibold"
        title="Наверх"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default ScrollToTop;

"use client";
import { useEffect } from "react";

const FillBar = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const progressBar = document.querySelector(
        ".scroll-progress"
      ) as HTMLElement | null;

      if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", updateProgressBar);
    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return <div className="scroll-progress"></div>;
};

export default FillBar;

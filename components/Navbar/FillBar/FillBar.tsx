"use client";
import { useEffect } from "react";

const FillBar = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      document.querySelector(
        ".scroll-progress"
      ).style.width = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", updateProgressBar);
    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return (
    <>
      <div className="scroll-progress"></div>
    </>
  );
};

export default FillBar;

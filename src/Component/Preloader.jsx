"use client";

import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, 300); // optional delay for smoother feel
    }
  }, []);

  return null; // this component only manages behavior
};

export default Preloader;

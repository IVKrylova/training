import { useEffect, useState } from "react";

export const useScroll = (pixels: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateIsScrolled = () => {
      setIsScrolled(window.scrollY > pixels);
    };

    window.addEventListener("scroll", updateIsScrolled);

    return () => window.removeEventListener("scroll", updateIsScrolled);
  }, []);

  return isScrolled;
};

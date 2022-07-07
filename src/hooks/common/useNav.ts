import { useEffect, useState } from "react";

const useNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    if (scrollY > 15) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollY]);

  return { isScroll };
};

export default useNav;

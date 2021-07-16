import {useEffect, useState} from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      setScrollPosition(window.scrollY);
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return scrollPosition;
};
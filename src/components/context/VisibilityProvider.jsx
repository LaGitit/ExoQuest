import { useState, useEffect, useRef } from "react";
import { VisibilityContext } from "./VisibilityContext.jsx";

export const VisibilityProvider = ({ children }) => {
  const [section1Visibility, setSection1Visibility] = useState(100); // Start fully visible
  const section1Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetElement = section1Ref.current;
      if (targetElement) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            const visibility = Math.round(entry.intersectionRatio * 100);
            setSection1Visibility(visibility);
          },
          {
            root: null,
            threshold: Array.from({ length: 11 }, (_, i) => i / 10),
          }
        );

        observer.observe(targetElement);
        clearInterval(interval); // stop polling once it's ready

        return () => observer.disconnect();
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <VisibilityContext.Provider value={{ section1Visibility, section1Ref }}>
      {children}
    </VisibilityContext.Provider>
  );
};

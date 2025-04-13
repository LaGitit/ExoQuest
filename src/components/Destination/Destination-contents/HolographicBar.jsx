import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { useVisibility } from "../../context/useVisibility.jsx";
import { ExpandedHolographicBar } from "./Dashboard/contentsdashboard/ExpandedHolographicBar.component.jsx";
import "./HolographicBar.styles.css";

export const HolographicBar = ({ variant }) => {
  const { section1Visibility } = useVisibility();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shell2Activated, setShell2Activated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Logic to activate Shell 2
  useEffect(() => {
    if (section1Visibility < 70 && isScrollingDown) {
      setShell2Activated(true); // Activate when scrolling down
    }
    if (section1Visibility > 80) {
      setShell2Activated(false); // Reset only when significantly scrolled up
    }
  }, [section1Visibility, isScrollingDown]);

  const isShell1Active = !shell2Activated; // Sync with shell2 activation
  const isShell2Active = shell2Activated;

  return (
    <>
      {variant === "section1" && (
        <div className="section1-container">
          <Motion.div
            className="holographic-bar section1"
            initial={{ opacity: 1, y: 0 }}
            animate={
              isShell1Active
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20, width: "90%" }
            }
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      )}

      {variant === "section2" && (
        <Motion.div
          className={`holographic-bar section2 ${
            isShell2Active ? "expanded" : ""
          }`}
          initial={{ opacity: 0, y: -20, height: "4px" }}
          animate={
            isShell2Active
              ? { opacity: 1, y: 0, height: "12%" }
              : { opacity: 0, y: -20, height: "4px" }
          }
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          {isShell2Active && <ExpandedHolographicBar />}
        </Motion.div>
      )}
    </>
  );
};

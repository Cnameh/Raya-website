import { useState, useEffect } from "react";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

// icons
import { FaAngleUp } from "react-icons/fa";

const btnVariants = {
  start: { opacity: 0, y: "15vh" },
  end: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: "15vh",
    transition: {
      duration: 0.4,
    },
  },
};

const ScrollToTopButton = () => {
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 300) {
        setHasScrolledEnough(true);
      } else {
        setHasScrolledEnough(false);
      }
    });
  }, [hasScrolledEnough]);

  function handleGoingTop() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {hasScrolledEnough && (
        <motion.button
          key="scrollToTopBtn"
          variants={btnVariants}
          initial="start"
          animate={hasScrolledEnough && "end"}
          exit="exit"
          onClick={handleGoingTop}
          className="scrollToTop--btn"
        >
          <FaAngleUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

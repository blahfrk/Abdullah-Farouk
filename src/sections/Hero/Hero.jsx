import styles from "./HeroStyles.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/heroAnimation.json";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import facebookDark from "../../assets/facebook-light.svg";
import facebookLight from "../../assets/facebook-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={styles.colorModeContainer}
      >
        <Lottie
          animationData={animationData}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={styles.info}
      >
        <h1>
          Abdullah
          <br />
          Farouk
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={facebookIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Developing modern React websites for commercial businesses tailored to
          client satisfaction.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;

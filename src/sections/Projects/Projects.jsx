import styles from "./ProjectsStyles.module.css";
import philhealth from "../../assets/philhealth.png";
import todoList from "../../assets/todoList.png";
import studentRecord from "../../assets/studentRecord.png";
import twitterX from "../../assets/twitterX.png";
import foodRecipes from "../../assets/foodRecipes.png";
import guessNumber from "../../assets/guessNumber.png";
import RPS from "../../assets/RPS.png";
import CalmSpace from "../../assets/CalmSpace.png";
import html from "../../assets/html.svg";
import bootstrap from "../../assets/bootstrap.svg";
import react from "../../assets/react.svg";
import chakraUI from "../../assets/chakra-ui.svg";
import firebase from "../../assets/firebase.svg";
import css from "../../assets/css.svg";
import adalo from "../../assets/Adalo.svg";
import figma from "../../assets/figma.svg";
import javascript from "../../assets/javascript.svg";
import ProjectCard from "../../common/ProjectCard";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

function Projects() {
  return (
    <motion.section
      id="projects"
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className={styles.container}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={twitterX}
          firstTool={react}
          secondTool={chakraUI}
          thirdTool={firebase}
          link="https://twitter-x-rose.vercel.app/"
          h3="TwitterX"
          p="Twitter Clone App"
        />
        <ProjectCard
          src={philhealth}
          firstTool={html}
          secondTool={css}
          thirdTool={bootstrap}
          link="https://project-1-responsive-website-redesign-woad.vercel.app/"
          h3="Philhealth"
          p="Philhealth Redesign"
        />
        <ProjectCard
          src={CalmSpace}
          firstTool={adalo}
          secondTool={figma}
          link="https://previewer.adalo.com/65118a6f-9c36-48d3-ac15-b9dd8f1483ae"
          h3="CalmSpace"
          p="No Code Mobile App"
        />
        <ProjectCard
          src={todoList}
          firstTool={html}
          secondTool={bootstrap}
          thirdTool={javascript}
          link="https://javascript-html-dom-and-events-three.vercel.app/"
          h3="Todo List"
          p="Simple Todo List App"
        />
        <ProjectCard
          src={RPS}
          firstTool={html}
          secondTool={bootstrap}
          thirdTool={javascript}
          link="https://1-javascript-rock-paper-scissor.vercel.app/"
          h3="Rock Paper Scissor"
          p="Simple Game App"
        />
        <ProjectCard
          src={guessNumber}
          firstTool={html}
          secondTool={bootstrap}
          thirdTool={javascript}
          link="https://project-2-javascript-game-brown.vercel.app/"
          h3="Guess the Number"
          p="Simple Guessing App"
        />
      </div>
    </motion.section>
  );
}

export default Projects;

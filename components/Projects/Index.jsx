import React from "react";
import ProjectCard from "../ProjectCard/Index";
import styles from "../../styles/Projects.module.css";
import projects from "../../assets/works.json";

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <h1 className={styles.projects_heading}>/ projects</h1>
      <div className={styles.cards}>
        {projects?.map((pro) => {
          return <ProjectCard prop={pro} key={pro.id}></ProjectCard>;
        })}
      </div>
    </div>
  );
};

export default Projects;

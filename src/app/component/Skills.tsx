import React from "react";
import { TiTick } from "react-icons/ti";
import styles from "@/styles/Skill.module.css"; // Import the CSS Module

const Skills = () => {
  let skills = [
    {
      name: "HTML",
      percentage: "95",
      divWidth: "w-[95%]",
    },
    {
      name: "CSS",
      percentage: "90",
      divWidth: "w-[90%]",
    },
    {
      name: "Tailwind CSS",
      percentage: "70",
      divWidth: "w-[70%]",
    },
    {
      name: "TypeScript",
      percentage: "80",
      divWidth: "w-[80%]",
    },
    {
      name: "Designing",
      percentage: "60",
      divWidth: "w-[60%]",
    },
  ];

  return (
    <div id="skills">
      <div className={styles.skillsContainer}>
        <div className={styles.skillsBackground}></div>
        <div className={styles.skillsWrapper}>
          <div className="text-center mb-16">
            <h1 className={styles.skillsHeading}>My Skills</h1>
            <p className={styles.skillsParagraph}>
              A versatile set of technical and creative abilities that drive my
              passion for innovation and excellence.
            </p>
          </div>

          <div className={styles.skillsCardWrapper}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.skillCardInner}>
                  <div className={styles.skillCardHeader}>
                    <span className="flex items-center">
                      <div className={styles.skillIcon}>
                        <TiTick className="w-6 h-6" />
                      </div>
                      <h2 className={styles.skillTitle}>{skill.name}</h2>
                    </span>
                    <span>
                      <p className={styles.skillPercentage}>
                        {skill.percentage}%
                      </p>
                    </span>
                  </div>
                  <div className={styles.skillProgressBar}>
                    <div
                      className={`${styles.skillProgress} ${skill.divWidth}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

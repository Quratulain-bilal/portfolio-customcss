"use client";
"use client";

import React from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import styles from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <div id="about">
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.flexCol}`}>
            <h1 className={styles.title}>
              I AM Web Developer
              <br className="hidden lg:inline-block" />
            </h1>
            <p className={styles.paragraph}>
              As a Montessori Directress, I have dedicated my career to
              fostering creativity and independent thinking in young learners.
              My journey extends beyond the classroom as a successful trader,
              where I apply strategic insights to navigate the financial
              markets. Now, I am poised to merge these experiences with my
              passion for technology, aspiring to become a future AI-driven web
              developer. This unique blend of education, finance, and tech
              empowers me to innovate and create solutions that make a lasting
              impact. Explore my portfolio to see how I bring these worlds
              together.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="https://github.com/Quratulain-bilal">
                <button className={styles.button}>
                  Github
                  <IoLogoGithub />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} alt="image" src="/picture/anna.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

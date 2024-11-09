
"use client";

import { FaCloudDownloadAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className={styles.section}>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <Image
            data-aos="fade-up"
            className={styles.imageContainer}
            alt="hero"
            src="/picture/anna.jpg"
            width={150}
            height={150}
          />

          <div data-aos="fade-right">
            <h1 className={styles.heading}>Quratulain Shah</h1>
            <p className={styles.paragraph}>
              I am Quratulain, a passionate future AI web developer, an
              experienced trader, and a dedicated Montessori directress. My
              journey blends technology with early childhood education, aiming
              to innovate and inspire in both fields.
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="https://new-hakaton-1-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className={styles.button}>
                  Download CV
                  <FaCloudDownloadAlt />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

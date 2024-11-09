import React from "react";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import styles from "@/styles/Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInnerContainer}>
        <div className={styles.footerLogoContainer}>
          <a className={styles.footerLogo}>Quratulain Shah</a>
          <p className={styles.footerText}>
            © 2024 Quratulain —
            <a
              href="https://x.com/stelalvna"
              className={styles.footerText}
              rel="noopener noreferrer"
              target="_blank"
            >
              @shah
            </a>
          </p>
        </div>

        <span className={styles.socialLinks}>
          
          <a
            href="https://www.facebook.com/profile.php?id=61565211897828"
            className={`${styles.socialIcon} facebook`}
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://x.com/stelalvna"
            className={`${styles.socialIcon} twitter`}
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.instagram.com/muhammadsalah9544/"
            className={`${styles.socialIcon} instagram`}
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://github.com/Quratulain-bilal"
            className={`${styles.socialIcon} github`}
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/quratulain-shah-7bb869316"
            className={`${styles.socialIcon} linkedin`}
          >
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

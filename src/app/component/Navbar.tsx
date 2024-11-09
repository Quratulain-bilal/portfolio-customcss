"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <div className={styles.logoContainer}>
              <div className={styles.logoBackground}>
                <h1 className={styles.logoText}>Q</h1>
              </div>
            </div>
            <span className={styles.titleText}>Quratulain.Shah</span>
          </a>

          {/* Toggle button for small screens */}
          <button
            onClick={toggleMenu}
            className={`${styles.toggleButton} md:hidden`}
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <FaBars className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>

          {/* Navbar links */}
          <nav
            className={`${
              isOpen ? styles.navLinksActive : styles.navLinks
            } md:flex md:items-center md:gap-8 md:justify-end md:bg-transparent`}
          >
            <div className="flex flex-col md:flex-row md:items-center text-base md:gap-8">
              <Link
                href="#home"
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="#about"
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="#skills"
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>

              <Link
                href="#project"
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="#Contact"
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Project.module.css";

const projects = [
  {
    title: "STATIC RESUME",
    description:
      "Build a static, professional resume with an interactive skills toggle. Showcase your expertise and easily highlight your skills with a simple click, ensuring a clean and dynamic presentation.",

    imageUrl: "/projects/calculator.jpg",
    link: "https://new-hakaton-1-five.vercel.app/",
  },
  {
    title: "DYNAMIC RESUME BUILDER",
    description:
      "Create professional, customizable resumes in minutes with an intuitive, user-friendly interface.Fully responsive resume builder that allows for seamless customization and real-time preview.",
    imageUrl: "/projects/RESUME.jpg",
    link: "https://hakaton-3-dynamic.vercel.app/ ",
  },
  {
    title: "COFEE WEBSITE",
    description:
      "A beautifully designed coffee website offering a range of premium coffee products, brewing guides, and a seamless online shopping experience.Perfect for coffee enthusiasts looking for quality and convenience in one place.",
    imageUrl: "/projects/COFEE.jpg",
    link: "https://cofee-website-nextjs.vercel.app/",
  },
  {
    title: "STUDENT MANAGEMENT SYSTEM",
    description:
      "CLI-based student management system for efficient terminal-based management of student records, including adding",
    imageUrl: "/projects/student.jpg",
    link: "https://github.com/Quratulain-bilal/student-manangement-sysytem.git ",
  },
  {
    title: "BANK MANAGEMENT SYSTEM",
    description:
      "This is a basic CLI-based bank management system program made with TypeScript. You can run it using NPM.",
    imageUrl: "/projects/bank.jpg",
    link: "https://github.com/Quratulain-bilal/Oop_My_Bank_Project.git ",
  },
  {
    title: "EDITABLE RESUME",
    description:
      "Create and customize your resume effortlessly with this editable resume builder. Modify content, add sections, and update your details on the go.",
    imageUrl: "/projects/countdown.jpg",
    link: "https://new-hakaton-edit.vercel.app/",
  },
  {
    title: "NUMBER GUESSING GAME",
    description:
      "CLI-based number guessing game that challenges users to guess a randomly generated number within a set number of attempts from the terminal.",
    imageUrl: "/projects/number.jpg",
    link: "https://github.com/Quratulain-bilal/CLI-Number-Guessing-Game.git ",
  },


];

export default function Projects() {
  return (
    <div id="project">
      <section className={styles.projectSection}>
        <div className="container px-16 py-48 mx-auto">
          <div className={styles.projectHeader}>
            <h1>My Projects</h1>
            <p>
              Explore my collection of innovative and impactful projects that
              showcase my skills in web development, TypeScript, and AI.
            </p>
          </div>
          <div className={styles.projectCardContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className="relative">
                  <Image
                    alt="project"
                    className={styles.projectCardImage}
                    src={project.imageUrl}
                    width={500}
                    height={300}
                  />
                  <div className={styles.projectCardContent}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      className={styles.viewProjectLink}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  return ( <div id="Contact">
    <div className={styles.contactContainer}>
      <section className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>Address: Baldiya Town, Karachi</p>
          <p>Email: aimoshah@gmail.com</p>

          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115758.70437517508!2d66.87047998858372!3d24.950476087767356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315316d0ef89f%3A0x3373486be2ae62b0!2sBaldia%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725096256625!5m2!1sen!2s"
            style={{
              filter: "contrast(1.2) opacity(0.7)",
              width: "100%",
              height: "300px",
              border: "none",
              borderRadius: "8px",
              marginTop: "20px",
            }}
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <p>Phone: 03102645309</p>
        </div>

        <div className={styles.contactForm}>
          <h2>Contact Me</h2>
          <form action="https://formspree.io/f/mzzpoldg" method="POST">
            <input
              type="text"
              name="Name"
              className={styles.inputField}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="Email"
              className={styles.inputField}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="Subject"
              className={styles.inputField}
              placeholder="Subject"
              required
            />
            <textarea
              name="Message"
              className={styles.inputField}
              placeholder="Your Message"
              required
            />
            <button type="submit" className={styles.submitButton}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>

    </div>
  );
  
};

export default Contact;

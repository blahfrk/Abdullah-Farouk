import styles from "./ContactStyles.module.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="sectionTitle"
      >
        Contact
      </motion.h1>
      <motion.form
        action="https://formspree.io/f/xlddjzre"
        method="post"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </motion.form>
    </section>
  );
}

export default Contact;

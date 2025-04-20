import styles from '../assets/styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="contactWrapper">
      <h2>Contact Me</h2>
      <div className={styles.contactInfo}>
        <p>Email: victorrikus@gmail.com</p>
        <p>Phone: 082121373459</p>
        <p>LinkedIn: linkedin.com/in/viktorikus-febrianto-b1b111297</p>
        <p>GitHub: github.com/Viktorikus</p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
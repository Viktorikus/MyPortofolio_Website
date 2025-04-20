import styles from '../assets/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} My Portfolio | 152023131 - Viktorikus Nokia Laksamana Febrianto</p>
      </div>
    </footer>
  );
};

export default Footer;
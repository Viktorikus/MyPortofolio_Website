import styles from '../assets/styles/Home.module.css';
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.profile}>
        <img 
          src={profileImage} 
          alt="Profile" 
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Viktorikus Nokia Laksamana Febrianto</h1>
        <p className={styles.tagline}>Frontend Developer | UI Enthusiast</p>
      </div>
    </section>
  );
};

export default Home;
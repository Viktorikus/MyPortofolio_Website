import styles from '../assets/styles/About.module.css';
import SkillItem from '../components/SkillItem';

const About = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 30 },
    { name: 'React', level: 20 }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutWrapper}>

      <h2>About Me</h2>
      <p>Hi, I'm a student at ITENAS Bandung, currently learning web development. I have a passion for creating beautiful and functional websites.</p>
      
      <div className={styles.education}>
        <h3>Education</h3>
        <p>Informatika - Institut Teknologi Nasional Bandung (2023-Present)</p>
      </div>
      
      <div className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill}/>
          ))}
        </div>
      </div>
      </div>

    </section>
  );
};

export default About;
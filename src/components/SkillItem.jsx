import styles from '../assets/styles/SkillItem.module.css';

const SkillItem = ({ skill = {} }) => {  // Berikan default empty object
  return (
    <div className={styles.skill}>
      <div className={styles.skillInfo}>
        <span>{skill.name || 'Unnamed Skill'}</span> {/* Fallback text */}
        <span>{skill.level || 0}%</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progress} 
          style={{ width: `${skill.level || 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
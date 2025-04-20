import styles from '../assets/styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={project.image} 
          alt={project.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              className={styles.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.githubUrl} 
            className={styles.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
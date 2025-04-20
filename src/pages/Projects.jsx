import styles from '../assets/styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import WebProject from '../assets/images/web.png';
import TrainProject from '../assets/images/train.jpeg';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portofolio Website",
      description: "A minimalist dark/light theme portfolio with responsive layout.",
      technologies: ["React", "Node.js", "HTML", "CSS"],
      image: WebProject
    },
    {
      id: 2,
      title: "Automatic Railway Crossing Gate",
      description: "Productivity app for team collaboration",
      technologies: ["Arduino", "Blynk", "C/C++"],
      image: TrainProject
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
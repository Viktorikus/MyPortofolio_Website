import styles from '../assets/styles/Header.module.css';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>My Portfolio</h1>
        <nav className={styles.nav}>
          <button 
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          {/* Three-dot menu button */}
          <div className={styles.menuContainer}>
            <button 
              onClick={toggleMenu}
              className={styles.menuButton}
              aria-label="Toggle menu"
            >
              ⋮
            </button>
            
            {/* Dropdown menu */}
            {showMenu && (
              <div className={styles.menuDropdown}>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
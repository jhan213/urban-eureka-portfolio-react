import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const styles = {
  headingStyle: {
    padding: "0 0 0 50px",
  },
  headerStyle: {
    background: "#FDB44E",
    height: "10vh",
    display: "flex",
    flex: "flex-wrap",
    padding: "0 1rem 0 0",
  },
  navHeadingStyle:{
    padding: "0 0.75rem",
  },
  navLinkStyle:{
    color: "black",
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.headerStyle} className="navbar justify-content-between">
      <h1 style={styles.headingStyle}>Jaewoo Han</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item" style={styles.navHeadingStyle}>
          <a
            href="#about" style={styles.navLinkStyle}
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "About"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item" style={styles.navHeadingStyle}>
          <a
            href="#portfolio" style={styles.navLinkStyle}
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item" style={styles.navHeadingStyle}>
          <a
            href="#contact" style={styles.navLinkStyle}
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item" style={styles.navHeadingStyle}>
          <a
            href="#resume" style={styles.navLinkStyle}
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

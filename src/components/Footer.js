import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faStackOverflow  } from '@fortawesome/free-brands-svg-icons'

const styles = {
    listItemStyle: {
      border: "none",
      background: "transparent",
      fontSize: "35px",
    },
    footerStyle: {
        background: "lightblue",
        height: "10vh",
    },
  };

function Footer() {
    return (
        <footer style={styles.footerStyle}>
            <ul className="list-group list-group-horizontal justify-content-center">
                <li style={styles.listItemStyle} className="list-group-item"><a  href="https://github.com/jaehan213" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                <li style={styles.listItemStyle} className="list-group-item"><a href="https://www.linkedin.com/in/jaewoo-han-79911b250/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li style={styles.listItemStyle} className="list-group-item"><a href="https://stackoverflow.com/users/19979654/jaehan213" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /></a></li>
            </ul>
        </footer>
    );
  }
  
  export default Footer;
  
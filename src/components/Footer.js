import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'

const styles = {
    listItemStyle: {
      border: "none",
      background: "transparent",
    },
    footerStyle: {
        background: "lightblue",
        height: "10vh",
    }
  };

function Footer() {
    return (
        <footer style={styles.footerStyle}>
            <ul className="list-group list-group-horizontal justify-content-center">
                <li style={styles.listItemStyle} className="list-group-item"><a href="#home"><FontAwesomeIcon icon={faGift} /></a></li>
                <li style={styles.listItemStyle} className="list-group-item"><a href="#home"><FontAwesomeIcon icon={faGift} /></a></li>
                <li style={styles.listItemStyle} className="list-group-item"><a href="#home"><FontAwesomeIcon icon={faGift} /></a></li>
            </ul>
        </footer>
    );
  }
  
  export default Footer;
  
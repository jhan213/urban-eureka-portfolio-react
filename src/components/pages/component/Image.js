import React from 'react';
import '../../../styles/Image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'

const styles = {
    imgStyle: {
      width: "auto",
      height: "22vh",
      padding: "0 0 0 0",
      objectFit: "cover",
      margin: "0 1rem -1.25rem 0",
    },
    cardStyle: {
        position: "relative",
        top: "-120px",
        left: "65px",
        color: "black",
    },
    iconStyle: {
        padding: "1rem 1rem",
    }
}

export default function Image(props) {
    return (
        <div>
            <img id="portImg" style={styles.imgStyle} src={props.link} name="Project 1">
            </img>
            <h2 style={styles.cardStyle}>
                <a href="#">{props.name}</a>
                <a href="#" style={styles.iconStyle}><FontAwesomeIcon icon={faGithub}/></a>
            </h2>
        </div>
    );
}

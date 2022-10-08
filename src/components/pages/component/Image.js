import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Image(props) {
    const [imgHover, setImgHover] = useState(false);
    const [linkHover, setLinkHover] = useState(false);
    const [iconHover, setIconHover] = useState(false);

    const handleImgMouseEnter = () => {
        setImgHover(true);
    };

    const handleImgMouseLeave = () => {
        setImgHover(false);
    };

    const handleLinkMouseEnter = () => {
        setImgHover(true);
        setLinkHover(true);
    };

    const handleLinkMouseLeave = () => {
        setImgHover(false);
        setLinkHover(false);
    };

    const handleIconMouseEnter = () => {
        setImgHover(true);
        setIconHover(true);
    };

    const handleIconMouseLeave = () => {
        setImgHover(false);
        setIconHover(false);
    };

    const styles = {
        cardStyle: {
            width: "250px",
            height: "22vh",
            margin: "0.2rem",
            position: "relative",
            bottom: "40px",
        },
        imgStyle: {
            width: "250px",
            height: "22vh",
            padding: "",
            objectFit: "fill",
            margin: "",
            opacity: imgHover ? "25%" : "100%",
        },
        iconStyle: {
            color: iconHover ? "black" : "darkgrey",
            position: "relative",
            top: "90px",
            fontSize: "25px",
            left: "50px",
            zIndex: "999",
        },
        linkStyle: {
            textDecoration: "none",
            color: linkHover ? "black" : "darkgrey",
            position: "relative",
            top: "90px",
            left: "20px",
            fontSize: "25px",
            zIndex: "999",
        },
        divStyle: {
            maxWidth: "250px",
            width: "250px",
        }
    }

    return (
        <div style={styles.cardStyle}>
            <div style={styles.divStyle}>
                <a
                    onMouseEnter={handleLinkMouseEnter}
                    onMouseLeave={handleLinkMouseLeave}
                    target="_blank"
                    href={props.pageLink} style={styles.linkStyle}>{props.name}</a>
                <a
                    onMouseOver={handleIconMouseEnter}
                    onMouseLeave={handleIconMouseLeave}
                    target="_blank"
                    href={props.github} style={styles.iconStyle}><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <img
                onMouseEnter={handleImgMouseEnter}
                onMouseLeave={handleImgMouseLeave}
                id="portImg" style={styles.imgStyle} src={props.imgLink} name="Project 1">
            </img>
        </div>
    );
}

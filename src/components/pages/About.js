import React from 'react';

const styles = {
  contentStyle: {
    background: "lightblue",
    height: "80vh",
    padding: "25px 50px",
  },
  portraitStyle: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "25px 0",
  }
};

export default function About() {
  return (
    <div style={styles.contentStyle}>
      <h2>About Me</h2>
      <img style={styles.portraitStyle} src="https://picsum.photos/536/354"></img>
      <p>
        Hi. My name is Jae. I enjoy creating websites and applications that are beneficial to its users. I like to create clean designs with efficient code and am running out of things to say.
      </p>
    </div>
  );
}

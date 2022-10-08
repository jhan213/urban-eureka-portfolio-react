import React from 'react';

const styles = {
  contentStyle: {
    background: "#abb0b9",
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
        Hi, welcome to my webpage! My name is Jae, and I am a senior at UCLA, studying Statistics and software development. I love math and computer science and being able to use them to solve real-world problems. During a coding bootcamp course at UCLA Extension, I was able to create and deploy this website with React and Github. I have many more projects like this one which you may check by navigating to the Portfolio tab at the top of the page or clicking the link to my Github below. My resume can also be found on the right-most tab, and although the contact form has not been setup yet, you can still contact me at my email, jaehan213@gmail.com .
      </p>
    </div>
  );
}

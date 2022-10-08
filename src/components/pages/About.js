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
        Hi. Welcome to my webpage. My name is Jae, and I am a senior at UCLA, studying Statistics and software development as I love math and computer science. I took a bootcamp course on web development at UCLA Extension and was able to create and deploy this website with React and Github. I have many more projects like this one which you can check by navigating to the Portfolio tab at the top of the page or clicking the link to my Github below. My resume can also be found on the right-most tab. The contact form unfortunately has not been setup but you can still contact me at my email, jaehan213@gmail.com .
      </p>
    </div>
  );
}

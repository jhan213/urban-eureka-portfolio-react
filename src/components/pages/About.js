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
      There weren't supposed to be dragons flying in the sky. First and foremost, dragons didn't exist. They were mythical creatures from fantasy books like unicorns. This was something that Pete knew in his heart to be true so he was having a difficult time acknowledging that there were actually fire-breathing dragons flying in the sky above him. Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.
      </p>
    </div>
  );
}

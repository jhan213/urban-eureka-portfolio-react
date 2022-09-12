import React from 'react';

const styles = {
  contentStyle: {
    background: "lightblue",
    height: "80vh",
    padding: "25px 50px",
  },
  imgStyle: {
    width: "auto",
    height: "22vh",
    padding: "0 0 0 0",
    objectFit: "cover",
    margin: "0 1rem 1rem 0",
  }
}

export default function Portfolio() {
  return (
    <div style={styles.contentStyle}>
      <h2>Portfolio</h2>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
        </div>
        <div className="d-flex justify-content-center">
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
        </div>
        <div className="d-flex justify-content-center">
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
          <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
        </div>
      </div>
    </div>
  );
}

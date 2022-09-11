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
    padding: "0 0 1rem 0",
    objectFit: "cover",
  }
}

export default function Portfolio() {
  return (
    <div style={styles.contentStyle}>
      <h2>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-5">
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
          </div>
          <div className="col-5">
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
            <img style={styles.imgStyle} src="https://picsum.photos/536/354"></img>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

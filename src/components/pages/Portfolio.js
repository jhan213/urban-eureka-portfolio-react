import React from 'react';
import Image from './component/Image';

const styles = {
  contentStyle: {
    background: "#abb0b9",
    height: "80vh",
    padding: "25px 50px",
  },
}

export default function Portfolio() {

  return (
    <div style={styles.contentStyle}>
      <h2>Portfolio</h2>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 1"}
          ></Image>
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 2"}
          ></Image>
        </div>
        <div className="d-flex justify-content-center">
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 3"}
          ></Image>
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 4"}
          ></Image>
        </div>
        <div className="d-flex justify-content-center">
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 5"}
          ></Image>
          <Image
            link={"https://picsum.photos/536/354"}
            name={"Project 6"}
          ></Image>
        </div>
      </div>
    </div>
  );
}

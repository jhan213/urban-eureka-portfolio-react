import React from 'react';

const styles = {
  contentStyle: {
    background: "#abb0b9",
    height: "80vh",
    padding: "25px 50px",
  },
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('SamplePDF2.pdf').then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'SamplePDF2.pdf';
      alink.click();
    })
  })
}

export default function Home() {
  return (
    <div style={styles.contentStyle}>
      <h2>Resume</h2>
      <button onClick={onButtonClick}>Download PDF</button>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
}

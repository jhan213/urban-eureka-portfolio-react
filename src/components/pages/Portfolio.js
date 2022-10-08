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
            imgLink={"https://github.com/jaehan213/reimagined-octo-goggles-google-books/raw/master/readme_preview.png"}
            name={"Book Search"}
            github={"https://github.com/jaehan213/reimagined-octo-goggles-google-books"}
            pageLink={"https://paperback-search-engine-9.herokuapp.com/"}
          ></Image>
          <Image
            imgLink={"https://github.com/jaehan213/silver-music-trivia/raw/main/preview.PNG"}
            name={"Music Trivia"}
            github={"https://github.com/jaehan213/silver-music-trivia"}
            pageLink={"https://jaehan213.github.io/silver-music-trivia/"}
          ></Image>
        </div>
        <div className="d-flex justify-content-center">
          <Image
            imgLink={"https://github.com/jaehan213/widget-web-weather-dashboard/raw/main/assets/weather_dashboard_preview.PNG"}
            name={"Weather Dash"}
            github={"https://github.com/jaehan213/widget-web-weather-dashboard"}
            pageLink={"https://jaehan213.github.io/widget-web-weather-dashboard/"}
          ></Image>
          <Image
            imgLink={"https://github.com/jaehan213/goat-work-day-scheduler/raw/main/assets/module5_preview.PNG"}
            name={"Work Schedule"}
            github={"https://github.com/jaehan213/goat-work-day-scheduler"}
            pageLink={"https://jaehan213.github.io/goat-work-day-scheduler/"}
          ></Image>
        </div>
        <div className="d-flex justify-content-center">
          <Image
            imgLink={"https://github.com/jaehan213/winter-jate-text-editor/raw/main/preview.png"}
            name={"JATE"}
            github={"https://github.com/jaehan213/winter-jate-text-editor"}
            pageLink={"https://winter-jate-text-editor.herokuapp.com/"}
          ></Image>
          <Image
            imgLink={"https://github.com/jaehan213/online-speed-dev-quiz/raw/main/module4_preview.PNG"}
            name={"Speed Dev Quiz"}
            github={"https://github.com/jaehan213/online-speed-dev-quiz"}
            pageLink={"https://jaehan213.github.io/online-speed-dev-quiz/"}
          ></Image>
        </div>
      </div>
    </div>
  );
}

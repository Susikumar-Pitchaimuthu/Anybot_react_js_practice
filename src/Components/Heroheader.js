import "./HeroHeader.css";
import firstImage from "./images/Hero header/first.png";
import secondImage from "./images/Hero header/second.png";
import thirdImage from "./images/Hero header/third.png";
import fourthImage from "./images/Hero header/fourth.png";
import fifthImage from "./images/Hero header/fifth.png";

function Heroheader() {
  return (
    <div className="hero-header-main-div">
      <div className="hero-header-inside-div">
        <h1 className="header-h1">
          Unleased the potential of the TimeCraft AI for schedule your message
          or information
        </h1>

        <h3 className="header-h3">
          With Tars LLM-driven automation, supercharge your customer service
          landscape. Our chatbots, powered by ChatGPT API, swiftly resolve
          support questions with unrivaled accuracy
        </h3>

        <div className="header-button-div">
          <button className="schedule-button header-btn">Schedule Demo</button>
          <button className="use-timecraft-button header-btn">
            Use TimeCraft
          </button>
        </div>

        <div className="sheild-class-name">
          <div className="sheild-inside-div">
            <img className="sheild-image" src={firstImage} alt="sheild-image" />
            <img
              className="sheild-image"
              src={secondImage}
              alt="sheild-image"
            />
            <img className="sheild-image" src={thirdImage} alt="sheild-image" />
            <img
              className="sheild-image"
              src={fourthImage}
              alt="sheild-image"
            />
            <img className="sheild-image" src={fifthImage} alt="sheild-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroheader;

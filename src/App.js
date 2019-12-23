import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="center header">
        <h1>Thitiwat Thongbor</h1>
        <h5>Software Developer / Game Developer</h5>
      </div>
      <hr />
      <div className="overview">
        <b>Overview</b>
        <p style={{ textIndent: "50px", padding: "20px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <hr />
      <div className="skillhighlight">
        <b>Skill Highlights</b>
        <ul className="row" style={{ marginLeft: "20px" }}>
          <li className="column">1.a</li>
          <li className="column">1.a</li>
          <li className="column">1.a</li>
          <li className="column">1.a</li>
          <li className="column">1.a</li>
          <li className="column">1.a</li>
        </ul>
      </div>
      <hr />
      <div className="experience">
        <b>Experiences</b>
        <div className="exp">1a</div>
        <div className="exp">1a</div>
        <div className="exp">1a</div>
        <div className="exp">1a</div>
        <div className="exp">1a</div>
      </div>
      <hr />
      <div className="education">
        <b>Education</b>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
      </div>
      <hr />
      <div className="contact">
        <b>Contact</b>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
        <div className="">1a</div>
      </div>
    </div>
  );
}

export default App;

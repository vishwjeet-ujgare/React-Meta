import React from "react";
import "./achivementCards.css";
import certificatesImg from "../Img/certificates-img.png";
import technicalSkillsImg from "../Img/technical-skills.jpg";
import otherSkillsImg from "../Img/other-skills.jpg";
export default function AchivementCards() {
  return (
    <div id="achivements-container">
      <h1 id="achivements-heading">Achivementss</h1>

      <div id="achivements-cards-container">
        <div className="achivements-card">
          <img src={certificatesImg} alt="certification-sample-img" />
          <div className="achivements-card-info">
            <h2>Certificates</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              ornare urna. Sed volutpat orci dui, vel consectetur ante aliquet
              at.{" "}
            </p>
            <button>Check</button>
          </div>
        </div>

        <div className="achivements-card">
          <img src={technicalSkillsImg} alt="Achivements-sample-img" />
          <div className="achivements-card-info">
            <h2>technical Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              ornare urna. Sed volutpat orci dui, vel consectetur ante aliquet
              at.{" "}
            </p>
            <button>Check</button>
          </div>
        </div>

        <div className="achivements-card">
          <img src={otherSkillsImg} alt="Otherskills-sample-img" />
          <div className="achivements-card-info">
            <h2>Other Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              ornare urna. Sed volutpat orci dui, vel consectetur ante aliquet
              at.{" "}
            </p>
            <button>Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}

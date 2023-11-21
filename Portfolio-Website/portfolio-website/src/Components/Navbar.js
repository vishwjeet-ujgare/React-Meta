import React from "react";
import "./navbar.css";
import gitHub from "../Img/github-round.png";
import hackerRank from "../Img/hackerrank.png";
import linkedIn from "../Img/linkedin-round.png";


function Navbar() {
  return (
    <div className="header">
      <ul className="header-left">
        <li>
          <a
            href="https:/github.com/vishwjeet-ujgare"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gitHub}
              alt="GitHub"
              style={{ height: "50px", width: "auto" }}
            />
          </a>
        </li>
        <li>
          <a
            href="https:/www.hackerrank.com/profile/vrvishwujgare"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={hackerRank}
              alt="HackerRank"
              style={{ height: "50px", width: "50px" }}
            />
          </a>
        </li>
        <li>
          <a
            href="https:/www.linkedin.com/in/vishwjeet-ujgare-671416206/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedIn}
              alt="LinkedIn"
              style={{ height: "50px", width: "50px" }}
            />
          </a>
        </li>
      </ul>

      <ul className="header-right">
        <li>Achivements</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
}

export default Navbar;

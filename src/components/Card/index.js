import React from "react";
import "./Card.css";

export default function Card({ info }) {
  const logoURL = "https://www.kayak.com" + info.logoURL;

  let alliance = info.alliance;
  if (alliance === "none") alliance = "";
  else if (alliance === "OW") alliance = "Oneworld";
  else if (alliance === "ST") alliance = "Sky Team";
  else if (alliance === "SA") alliance = "Star Alliance";

  const code = ` (${info.name})`;

  function HoverHandler(e) {
    const card = e.target;
    const info = card.querySelectorAll(`.showOnHover`);
    info.forEach((item) => {
      if (item.classList.contains(`show`)) item.classList.remove("show");
      else item.classList.add("show");
    });
  }

  return (
    <div className="card" onMouseOver={HoverHandler} onMouseOut={HoverHandler}>
      <img className="airline-logo" src={logoURL} alt="" />
      <div className="airline-info">
        <div className="airline-name">
          {info.name}
          <span className="showOnHover">{code}</span>
        </div>
        <div className="airline-alliance showOnHover">{alliance}</div>
        <div className="airline-phone showOnHover">{info.phone}</div>
        <div className="airline-site showOnHover">{info.site}</div>
      </div>
    </div>
  );
}

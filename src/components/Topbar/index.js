import React from "react";
import "./Topbar.css";
import kayak_logo from "../../images/Logo.svg";

export default function Topbar() {
  return (
    <div className="topbar">
      <img className="logo" src={kayak_logo} alt="" />
    </div>
  );
}

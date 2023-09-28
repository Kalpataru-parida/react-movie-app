import React from "react";
import "./header.css";

function header() {
  return (
    <span className="header" onClick={() => window.scroll(0,0)}>
      Movies
      <div className="box">hub</div>
    </span>
  );
}

export default header;

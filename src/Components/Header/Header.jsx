import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="a11y-hidden">1만 시간의 법칙</h1>
      <img className="title-img" src="/img/title.png" alt="1만 시간의 법칙" />
    </header>
  );
}

export default Header;

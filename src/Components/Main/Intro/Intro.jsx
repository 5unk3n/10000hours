import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro-section">
      <h2 className="a11y-hidden">인트로 섹션</h2>
      <p className="intro-title">
        "연습은 어제의 당신보다 당신을 더 낫게 만든다."
      </p>
      <p className="intro-desc">
        <strong>1만 시간의 법칙</strong>은 <br />
        어떤 분야의 전문가가 되기 위해서는 <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </section>
  );
}

export default Intro;

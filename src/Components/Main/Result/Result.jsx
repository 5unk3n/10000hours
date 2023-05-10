import React from "react";
import "./Result.css";

function Result({ myInfo }) {
  return (
    <section className="result-section">
      <p className="result-career">
        당신은 <strong>{myInfo.career || "???"}</strong> 전문가가 되기 위해서
      </p>
      <p className="result-time">
        대략{" "}
        <strong>{myInfo.time ? Math.floor(10000 / myInfo.time) : "???"}</strong>
        일 이상 훈련하셔야 합니다! :)
      </p>
    </section>
  );
}

export default Result;

import React, { useState } from "react";
import "./Inputs.css";
import Input from "../../common/Input";
import Button from "../../common/Button";

function Inputs({ setMyInfo }) {
  const [career, setCareer] = useState("");
  const [time, setTime] = useState("");

  const onChangeCareer = (e) => {
    setCareer(e.target.value);
  };
  const onChangeTime = (e) => {
    let value = e.target.value;
    if (value < 0) {
      value = 0;
    } else if (value > 24) {
      value = 24;
    }
    setTime(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMyInfo({ career, time });

    setCareer("");
    setTime("");
  };

  return (
    <section className="inputs-section">
      <form onSubmit={onSubmitHandler}>
        <div className="inputs-career">
          나는{" "}
          <Input
            type="text"
            placeholder="예) 프로그래밍"
            value={career}
            onChange={onChangeCareer}
          />{" "}
          전문가가 될 것이다.
        </div>
        <div className="inputs-time">
          그래서 앞으로 매일 하루에{" "}
          <Input
            type="number"
            placeholder="예) 5"
            value={time}
            onChange={onChangeTime}
          />{" "}
          시간씩 훈련할 것이다.
        </div>
        <Button className="inputs-button" type="submit" bgColor="#FCEE21">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </Button>
      </form>
    </section>
  );
}

export default Inputs;

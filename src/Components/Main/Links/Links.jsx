import React from "react";
import "./Links.css";
import Button from "../../common/Button";

function Links({ setModal }) {
  const openModal = () => {
    setModal(true);
  };

  return (
    <section className="links-section">
      <Button
        className="training"
        type="button"
        bgColor="#FCEE21"
        onClick={openModal}
      >
        훈련하러 가기 GO!GO!
      </Button>
      <Button type="button" bgColor="#fff">
        공유하기
      </Button>
    </section>
  );
}

export default Links;

import React from "react";
import Button from "../common/Button";
import "./Modal.css";

function Modal({ setModal }) {
  const closeModal = () => {
    setModal(false);
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  return (
    <div className="modal-backdrop">
      <article className="modal">
        <h2 className="modal-title">화이팅!!♥️♥️♥️</h2>
        <p className="modal-text">당신의 꿈을 응원합니다!</p>
        <img className="modal-img" src="/img/licat.png" alt="라이캣 이미지" />
        <Button
          className="close-modal"
          type="button"
          bgColor="#FCEE21"
          onClick={closeModal}
        >
          종료하고 진짜 훈련하러 가기 GO!GO!
        </Button>
      </article>
    </div>
  );
}

export default Modal;

import React from "react";
import "./Input.css";

/**
 * Input 컴포넌트
 *
 * @param {string} id - input의 id
 * @param {string} type - input 요소의 타입
 * @param {string} value - input의 값
 * @param {string} placeholder - 비어있을 때 표시될 값
 * @returns {JSX.Element} 입력 요소 컴포넌트
 */
function Input({ id, type, value, placeholder, onChange }) {
  return (
    <input
      required
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

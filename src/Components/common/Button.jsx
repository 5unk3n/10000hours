import React from "react";
import "./Button.css";

/**
 * Button 컴포넌트는 버튼을 나타냅니다.
 *
 * @param {React.ReactNode} children - 버튼에 쓸 텍스트
 * @param {string} type - 버튼의 타입
 * @param {string} bgColor - 버튼의 배경색
 * @param {string} className - 버튼의 클래스
 * @param {function} onClick - 온클릭 이벤트
 * @returns {JSX.Element} 버튼 컴포넌트
 */
function Button({ children, type, bgColor, onClick, className }) {
  return (
    <button
      className={`button ${className}`}
      style={{ backgroundColor: bgColor }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

import React from "react";
import s from "./Users.module.css";

export function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      version="1"
      viewBox="0 0 128 128"
    >
      <g>
        <path fill="#e3694a" d="M64 0a64 64 0 0164 64H0A64 64 0 0164 0z"></path>
        <animateTransform
          attributeName="transform"
          dur="900ms"
          repeatCount="indefinite"
          type="rotate"
          values="0 64 64;-40 64 64;0 64 64"
        ></animateTransform>
      </g>
      <g>
        <path
          fill="#e3694a"
          d="M64 128A64 64 0 010 64h128a64 64 0 01-64 64z"
        ></path>
        <animateTransform
          attributeName="transform"
          dur="900ms"
          repeatCount="indefinite"
          type="rotate"
          values="0 64 64;40 64 64;0 64 64"
        ></animateTransform>
      </g>
    </svg>
  );
}

const Twist = () => {
  return (
    <div className={s.twist}>
      {" "}
      <Icon />
    </div>
  );
};

export default Twist;

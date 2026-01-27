import React from "react";

function PrimaryButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} py-3 px-4 rounded-xl font-semibold bg-black text-white hover:-translate-y-0.5 hover:bg-orange-500 hover:text-black cursor-pointer transition-all duration-500`}
    >
      {props.text}
    </button>
  );
}

export default PrimaryButton;
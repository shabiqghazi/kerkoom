import React from "react";

export const MyButton = (props) => {
  return (
    <button
      className="bg-primary text-white shadow-md  w-full py-3 rounded-xl font-bold"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

import React from "react";

export const PlusButton = (props) => {
  return (
    <button
      className="flex justify-center items-center w-16 h-16 rounded-full bg-primary fixed bottom-5 right-5 drop-shadow-2xl"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="24px"
      >
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

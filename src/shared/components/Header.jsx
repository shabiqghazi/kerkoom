import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div
      className="bg-primary shrink-0 text-white flex items-center px-6 justify-between gap-3 mb-5"
      style={{ flexBasis: "64px" }}
    >
      <div className="w-8">
        <Link to="/menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
            width={18}
            height={20}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>
      <div className="grow text-center font-bold">{props.children}</div>
      <div className="w-8"></div>
    </div>
  );
};

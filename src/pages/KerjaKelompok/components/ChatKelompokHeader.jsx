import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ChatKelompokHeader = (props) => {
  const [showKelompokMenu, setShowKelompokMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="bg-primary shrink-0 text-white flex items-center px-6 justify-between gap-3"
      style={{ flexBasis: "64px" }}
    >
      <div className="w-8">
        <Link onClick={() => navigate(-1)}>
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
      <div className="w-8 flex justify-end">
        <button onClick={() => setShowKelompokMenu(!showKelompokMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            height={"24px"}
            fill="#fff"
          >
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
        </button>
        {showKelompokMenu ? (
          <div className="fixed flex flex-col bg-white text-dark top-10 rounded-lg p-2 shadow-2xl">
            <Link to="/menu/kerja-kelompok/info-kelompok/1" className="p-2">
              Info Kelompok
            </Link>
            <Link
              to="/menu/kerja-kelompok/todo-list-kelompok/1"
              className="p-2"
            >
              Todo List
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

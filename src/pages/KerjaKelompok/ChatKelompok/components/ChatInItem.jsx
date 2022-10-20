import React from "react";
import User2Photo from "../assets/img/user2-profile.jpg";

export const ChatInItem = () => {
  return (
    <div className="pr-12 pl-3 mb-3 flex items-end gap-2">
      <img src={User2Photo} alt="" className="w-10 h-10 rounded-full" />
      <div className="rounded-t-2xl rounded-br-2xl bg-white px-4 py-3 flex flex-col">
        <p className="font-bold text-primary mb-2">Ucup bin Yusuf</p>
        <p className="mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          dolorum.
        </p>
        <p className="self-end text-slate-400 text-sm">20:24</p>
      </div>
    </div>
  );
};

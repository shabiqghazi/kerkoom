import React from "react";
import { MenuItem } from "./components/MenuItem";

export const Menu = () => {
  const menuList = [
    {
      id: 1,
      menu: "Kalender Tugas",
      to: "/menu/kalender-tugas",
    },
    {
      id: 2,
      menu: "Kerja Kelompok",
      to: "/menu/kerja-kelompok",
    },
  ];
  return (
    <div className="bg-light min-h-screen">
      <div className="bg-primary flex h-16 px-5 items-center font-bold text-white">
        Home
      </div>
      <div className="p-5 flex-col flex gap-3">
        {menuList.map((menu) => (
          <MenuItem to={menu.to} key={menu.id}>
            {menu.menu}
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

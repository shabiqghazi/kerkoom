import React from "react";
import { Landing } from "./pages/Landing/Landing";
import { Daftar } from "./pages/Daftar/Daftar";
import { Masuk } from "./pages/Masuk/Masuk";
import { KerjaKelompok } from "./pages/KerjaKelompok/KerjaKelompok";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { KalenderTugas } from "./pages/KalenderTugas/KalenderTugas";
import { RuangDiskusi } from "./pages/RuangDiskusi/RuangDiskusi";
import { Curhat } from "./pages/Curhat/Curhat";
import { Pengumuman } from "./pages/Pengumuman/Pengumuman";
import { ChatKelompok } from "./pages/KerjaKelompok/ChatKelompok/ChatKelompok";
import { InfoKelompok } from "./pages/KerjaKelompok/InfoKelompok/InfoKelompok";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/daftar",
    element: <Daftar />,
  },
  {
    path: "/masuk",
    element: <Masuk />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/kalender-tugas",
    element: <KalenderTugas />,
  },
  {
    path: "/menu/kerja-kelompok",
    element: <KerjaKelompok />,
  },
  {
    path: "/menu/kerja-kelompok/:idKelompok",
    element: <ChatKelompok />,
  },
  {
    path: "/menu/kerja-kelompok/info-kelompok/:idKelompok",
    element: <InfoKelompok />,
  },
  {
    path: "/menu/kerja-kelompok/role-kelompok/:idKelompok",
    element: <div>Role Kelompok 1</div>,
  },
  {
    path: "/menu/kerja-kelompok/todo-list-kelompok/:idKelompok",
    element: <div>Todo-list Kelompok 1</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} className="top" />;
};

export default App;

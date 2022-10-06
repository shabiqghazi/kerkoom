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
    path: "/menu/ruang-diskusi",
    element: <RuangDiskusi />,
  },
  {
    path: "/menu/curhat",
    element: <Curhat />,
  },
  {
    path: "/menu/pengumuman",
    element: <Pengumuman />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

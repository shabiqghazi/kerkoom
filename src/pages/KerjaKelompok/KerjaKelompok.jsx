import React, { useState } from "react";
import { Header } from "../../shared/components/Header";
import { KelompokItem } from "./components/KelompokItem";

export const KerjaKelompok = () => {
  const [kelompok, setKelompok] = useState([
    {
      id: "1",
      matkul: "Pengembangan Aplikasi Web",
      kelompok: "Kel. 5 Pengembangan Aplikasi Web",
    },
    {
      id: "2",
      matkul: "Praktikum Pengembangan Aplikasi Web",
      kelompok: "Kel. 2 Praktikum Pengembangan Aplikasi Web",
    },
    {
      id: "3",
      matkul: "Manajemen Basis Data",
      kelompok: "Kel. 4 Manajemen Basis Data",
    },
  ]);
  return (
    <div className="bg-white flex flex-col h-screen overflow-hidden">
      <Header>Kerja Kelompok</Header>
      <div className="p-5 overflow-auto">
        {kelompok.map((k) => {
          return (
            <KelompokItem
              key={k.id}
              idKelompok={k.id}
              matkul={k.matkul}
              kelompok={k.kelompok}
            />
          );
        })}
      </div>
    </div>
  );
};

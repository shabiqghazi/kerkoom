import React from "react";
import { Header } from "../../shared/components/Header";
import { KelompokItem } from "./components/KelompokItem";

export const KerjaKelompok = () => {
  return (
    <div className="bg-white flex flex-col h-screen overflow-hidden">
      <Header>Kerja Kelompok</Header>
      <div className="p-5 overflow-auto">
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
        <KelompokItem />
      </div>
    </div>
  );
};

import React from "react";
import { Header } from "../../shared/components/Header";
import { DiskusiItem } from "./components/DiskusiItem";

export const RuangDiskusi = () => {
  return (
    <div className="bg-white h-screen flex flex-col overflow-hidden">
      <Header>Ruang Diskusi</Header>
      <div className="px-5 pb-5 overflow-auto">
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
        <DiskusiItem />
      </div>
    </div>
  );
};

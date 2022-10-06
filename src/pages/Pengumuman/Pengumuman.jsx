import React from "react";
import { Header } from "../../shared/components/Header";
import { PengumumanItem } from "./components/PengumumanItem";

export const Pengumuman = () => {
  return (
    <div className="bg-white h-screen flex flex-col overflow-hidden">
      <Header>Pengumuman</Header>
      <div className="px-5 pb-5 overflow-auto">
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
        <PengumumanItem />
      </div>
    </div>
  );
};

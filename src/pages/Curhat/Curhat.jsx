import React from "react";
import { Header } from "../../shared/components/Header";
import { CurhatItem } from "./components/CurhatItem";
import { PlusButton } from "../../shared/components/PlusButton";

export const Curhat = () => {
  return (
    <div className="bg-white h-screen flex flex-col overflow-hidden">
      <Header>Curhat</Header>
      <div className="px-5 pb-5 overflow-auto">
        <CurhatItem />
        <CurhatItem />
        <CurhatItem />
        <CurhatItem />
        <CurhatItem />
        <CurhatItem />
        <CurhatItem />
      </div>
      <PlusButton />
    </div>
  );
};

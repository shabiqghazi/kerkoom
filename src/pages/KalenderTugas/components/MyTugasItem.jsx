import React from "react";
import IconHapus from "../../../shared/icon-pack/trash-can-solid.svg";

export const MyTugasItem = (props) => {
  return (
    <div className="flex flex-col gap-2 p-3 border-b border-secondary">
      <p className="text-xs text-secondary">{props.dataTugas.matkul}</p>
      <div className="flex gap-2">
        <p className="text-5xl font-bold">
          {props.dataTugas.tanggal.getDate()}
        </p>
        <p className="font-bold grow">{props.dataTugas.tugas}</p>
        <button
          className="bg-red-500 shrink-0 flex flex-col justify-center items-center p-2 w-9 rounded-lg hover:bg-red-600 active:bg-red-700 active:ring-1 active:ring-red-500 active:ring-offset-2"
          href="llll"
        >
          <img src={IconHapus} alt="" className="w-9" />
        </button>
      </div>
    </div>
  );
};

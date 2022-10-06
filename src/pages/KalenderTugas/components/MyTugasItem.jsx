import React from "react";

export const MyTugasItem = (props) => {
  return (
    <div className="flex flex-col gap-2 p-3 border-b border-secondary">
      <p className="text-xs text-secondary">{props.dataTugas.matkul}</p>
      <div className="flex gap-2">
        <p className="text-5xl font-bold">{props.dataTugas.tanggal}</p>
        <p className="font-bold">{props.dataTugas.tugas}</p>
      </div>
    </div>
  );
};

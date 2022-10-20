import React from "react";
import { Link } from "react-router-dom";

export const KelompokItem = (props) => {
  return (
    <Link
      to={`/menu/kerja-kelompok/${props.idKelompok}`}
      className="flex flex-col gap-2 py-3 border-b border-dark"
    >
      <p className="text-primary">{props.matkul}</p>
      <h1 className="font-bold text-xl mb-3">{props.kelompok}</h1>
    </Link>
  );
};

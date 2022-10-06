import React from "react";
import { Link } from "react-router-dom";

export const CurhatItem = () => {
  return (
    <Link to="" className="flex flex-col gap-2 py-3 border-b border-dark">
      <p className="text-primary text-xs mt-3">Dari: Silmi Rahmawati</p>
      <h1 className="font-bold text-xl">
        Permasalahan Nilai yang belum muncul di akun SALAM
      </h1>
      <p className="text-secondary text-sm">
        Saya memiliki masalah dengan nilai Mata Kuliah Kalkulus I karena nilai
        dari Mata Kuliah tersebut b...
      </p>
    </Link>
  );
};

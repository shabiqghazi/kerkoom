import React from "react";
import { Link } from "react-router-dom";

export const KelompokItem = () => {
  return (
    <Link to="" className="flex flex-col gap-2 py-3 border-b border-dark">
      <p className="text-primary">Pengembangan Aplikasi Web</p>
      <h1 className="font-bold text-xl mb-3">
        Kel.5 Pengembangan Aplikasi Web
      </h1>
    </Link>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  return (
    <Link
      to={props.to}
      className="bg-white shadow-lg rounded-lg gap-2 p-5 border-l-4 border-l-primary block font-bold text-dark"
    >
      <p>{props.children}</p>
    </Link>
  );
};

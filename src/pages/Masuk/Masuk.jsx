import React, { useState } from "react";
import ChevronLeftSolid from "../../shared/icon-pack/chevron-left-solid.svg";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { MyButton } from "../../shared/components/MyButton";

export const Masuk = () => {
  const [userData, setUserData] = useState({
    nim: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <Link to="/">
          <img src={ChevronLeftSolid} alt="" className="w-7 my-7 mx-5" />
        </Link>
        <div className="flex flex-col">
          {" "}
          <h1 className="my-5 text-center text-3xl font-bold text-dark">
            Masuk
          </h1>
          <div className="px-5 pt-2">
            <div className="field mt-2">
              <label htmlFor="nim" className="block w-full mb-2">
                NIM
              </label>
              <InputText
                id="nim"
                className="block w-full mb-2"
                value={userData.nim}
                onChange={(e) =>
                  setUserData({ ...userData, nim: e.target.value })
                }
              />
            </div>
            <div className="field mt-2">
              <label htmlFor="password" className="block w-full mb-2">
                Password
              </label>
              <InputText
                id="password"
                className="block w-full mb-2"
                type={`password`}
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <div className="field mt-2 flex items-start gap-3">
              <input
                type="checkbox"
                id="isAgreed"
                className="mt-1"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label htmlFor="isAgreed" className="text-sm text-[#4b4b4b]">
                Ingat saya
              </label>
            </div>
            <div className="field mt-3">
              <Link to="/menu">
                <MyButton onClick={() => console.log(userData)}>Masuk</MyButton>
              </Link>
            </div>

            <div className="field mt-3 text-sm text-center text-[#4b4b4b]">
              Belum punya akun?{" "}
              <Link to="/daftar" className="text-primary">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import ChevronLeftSolid from "../../shared/icon-pack/chevron-left-solid.svg";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { MyButton } from "../../shared/components/MyButton";

export const Daftar = () => {
  const [userRegData, setUserRegData] = useState({
    fname: "",
    nim: "",
    password: "",
    token: "",
  });
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <Link to="/">
          <img src={ChevronLeftSolid} alt="" className="w-7 my-7 mx-5" />
        </Link>
        <div className="flex flex-col">
          <h1 className="my-5 text-center text-3xl font-bold text-dark">
            Daftar
          </h1>
          <div className="px-5 pt-2">
            <div className="field mt-2">
              <label htmlFor="fname" className="block w-full mb-2">
                Nama Lengkap
              </label>
              <InputText
                id="fname"
                className="block w-full mb-2"
                value={userRegData.fname}
                onChange={(e) =>
                  setUserRegData({ ...userRegData, fname: e.target.value })
                }
              />
            </div>
            <div className="field mt-2">
              <label htmlFor="nim" className="block w-full mb-2">
                NIM
              </label>
              <InputText
                id="nim"
                className="block w-full mb-2"
                value={userRegData.nim}
                onChange={(e) =>
                  setUserRegData({ ...userRegData, nim: e.target.value })
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
                value={userRegData.password}
                onChange={(e) =>
                  setUserRegData({ ...userRegData, password: e.target.value })
                }
              />
            </div>
            <div className="field mt-2">
              <label htmlFor="token" className="block w-full mb-2">
                Token Kelas
              </label>
              <InputText
                id="token"
                className="block w-full mb-2"
                value={userRegData.token}
                onChange={(e) =>
                  setUserRegData({ ...userRegData, token: e.target.value })
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
                Saya menyetujui{" "}
                <span className="text-primary underline">
                  Syarat dan Ketentuan
                </span>{" "}
                dan
                <span className="text-primary underline">
                  {" "}
                  Kebijakan Privasi
                </span>
              </label>
            </div>
            <div className="field mt-3">
              <MyButton onClick={() => console.log(userRegData)}>
                Daftar
              </MyButton>
            </div>
            <div className="field mt-3 text-sm text-center text-[#4b4b4b]">
              Sudah punya akun?{" "}
              <Link to="/masuk" className="text-primary">
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

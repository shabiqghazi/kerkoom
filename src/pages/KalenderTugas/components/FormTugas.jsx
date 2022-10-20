import React, { useState } from "react";
import { Dialog, Button } from "primereact";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact";

export const FormTugas = (props) => {
  const [tugasBaru, setTugasBaru] = useState({
    matkul: "",
    tanggal: new Date(),
    tugas: "",
  });
  const matkul = [
    {
      name: "Pengembangan Aplikasi Web",
      code: "PAW",
    },
    {
      name: "Praktikum Pengembangan Aplikasi Web",
      code: "PPAW",
    },
    {
      name: "Manajemen Basis Data",
      code: "MBD",
    },
    {
      name: "Praktikum Manajemen Basis Data",
      code: "PMBD",
    },
    {
      name: "Intelegensia Buatan",
      code: "IB",
    },
  ];
  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          color=""
          onClick={() => props.onHide()}
          className="p-button-text bg-primary active:bg-secondary"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          type="submit"
          onClick={() => {
            props.onTambahTugas(tugasBaru);
            props.onHide();
          }}
          autoFocus
          className="bg-primary active:bg-secondary"
        />
      </div>
    );
  };
  return (
    <Dialog
      header="Tambah Tugas Baru"
      visible={props.show}
      onHide={() => props.onHide()}
      breakpoints={{ "960px": "75vw" }}
      footer={renderFooter()}
      className="mx-5 w-full"
      baseZIndex={999}
    >
      <div className="py-5">
        <div className="field">
          <label htmlFor="tugas" className="block">
            Tugas
          </label>
          <InputText
            id="tugas"
            aria-describedby="tugas-form"
            className="block w-full"
            onChange={(e) =>
              setTugasBaru({ ...tugasBaru, tugas: e.target.value })
            }
          />
        </div>
        <div className="field mt-3">
          <label htmlFor="matkul" className="block">
            Mata Kuliah
          </label>

          <Dropdown
            value={tugasBaru.matkul}
            options={matkul}
            onChange={(e) => {
              setTugasBaru({ ...tugasBaru, matkul: e.value });
            }}
            optionLabel="name"
            placeholder="Pilih Mata Kuliah"
            className="w-full"
          />
        </div>
        <div className="field mt-3">
          <label htmlFor="tanggal" className="block">
            Tanggal
          </label>
          <Calendar
            id="icon"
            value={tugasBaru.tanggal}
            onChange={(e) => setTugasBaru({ ...tugasBaru, tanggal: e.value })}
            showIcon
            className="w-full"
          />
        </div>
      </div>
    </Dialog>
  );
};

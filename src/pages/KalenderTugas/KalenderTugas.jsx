import React, { useEffect, useState } from "react";
import { Header } from "../../shared/components/Header";
import { MyCalendar } from "./components/MyCalendar";
import { MyTugasItem } from "./components/MyTugasItem";
import { PlusButton } from "../../shared/components/PlusButton";
import { FormTugas } from "./components/FormTugas";

export const KalenderTugas = () => {
  const [daftarTugas, setDaftarTugas] = useState([
    {
      matkul: "Pengembangan Aplikasi Web",
      tanggal: new Date(2022, 9, 12),
      tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    },
    {
      matkul: "Praktikum Pengembangan Aplikasi Web",
      tanggal: new Date(2022, 9, 15),
      tugas: "Menerapkan konsep Flexbox dan Media Query",
    },
    {
      matkul: "Praktikum Pengembangan Aplikasi Web",
      tanggal: new Date(2022, 10, 17),
      tugas: "Report progress aplikasi",
    },
  ]);

  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [showFormTugas, setShowFormTugas] = useState(false);
  const handleTambahTugas = (tugasBaru) => {
    tugasBaru.matkul = tugasBaru.matkul.name;
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };
  const filterTugas = () => {
    return daftarTugas.filter((tugas) => {
      return (
        tugas.tanggal.getMonth() === activeStartDate.getMonth() &&
        tugas.tanggal.getFullYear() === activeStartDate.getFullYear()
      );
    });
  };

  const [daftarTugasPerMonth, setDaftarTugasPerMonth] = useState(filterTugas());
  useEffect(() => {
    setDaftarTugasPerMonth(filterTugas());
  }, [activeStartDate]);
  return (
    <div className="bg-light flex flex-col h-screen">
      <Header>Kalender Tugas</Header>
      <div className="flex flex-col gap-5 grow overflow-hidden">
        <MyCalendar
          daftarTugas={daftarTugas}
          onUpdate={(val) => {
            setActiveStartDate(val);
          }}
        />
        <div className="bg-white drop-shadow-lg rounded-t-3xl px-8 pt-8 pb-5 flex flex-1 overflow-hidden">
          <div className="overflow-y-scroll w-full">
            {daftarTugasPerMonth.map((dataTugas, i) => (
              <MyTugasItem key={i} dataTugas={dataTugas} />
            ))}
          </div>
        </div>
      </div>
      <PlusButton onClick={() => setShowFormTugas(true)} />
      <FormTugas
        show={showFormTugas}
        onHide={() => setShowFormTugas(false)}
        onTambahTugas={(tugasBaru) => handleTambahTugas(tugasBaru)}
      />
    </div>
  );
};

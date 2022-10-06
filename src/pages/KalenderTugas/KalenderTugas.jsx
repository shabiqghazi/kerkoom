import React from "react";
import { Header } from "../../shared/components/Header";
import { MyCalendar } from "./components/MyCalendar";
import { MyTugasItem } from "./components/MyTugasItem";

export const KalenderTugas = () => {
  const daftarTugas = [
    // {
    //   matkul: "Pengembangan Aplikasi Web",
    //   tanggal: 12,
    //   tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    // },
    // {
    //   matkul: "Pengembangan Aplikasi Web",
    //   tanggal: 12,
    //   tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    // },
    // {
    //   matkul: "Pengembangan Aplikasi Web",
    //   tanggal: 12,
    //   tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    // },
    // {
    //   matkul: "Pengembangan Aplikasi Web",
    //   tanggal: 12,
    //   tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    // },
    // {
    //   matkul: "Pengembangan Aplikasi Web",
    //   tanggal: 12,
    //   tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    // },
    {
      matkul: "Pengembangan Aplikasi Web",
      tanggal: 12,
      tugas: "Membuat Proposal Aplikasi yang akan dibuat",
    },
    {
      matkul: "Praktikum Pengembangan Aplikasi Web",
      tanggal: 15,
      tugas: "Menerapkan konsep Flexbox dan Media Query",
    },
  ];
  return (
    <div className="bg-light flex flex-col h-screen">
      <Header>Kalender Tugas</Header>
      <div className="flex flex-col gap-5 grow overflow-hidden">
        <MyCalendar />
        <div className="bg-white drop-shadow-lg rounded-t-3xl px-8 pt-8 pb-5 flex flex-1 overflow-hidden">
          <div className="overflow-y-scroll">
            {daftarTugas.map((dataTugas, i) => (
              <MyTugasItem key={i} dataTugas={dataTugas} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

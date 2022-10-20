import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style/calendar.css";

export const MyCalendar = (props) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [daftarTugas, setDaftarTugas] = useState(props.daftarTugas);
  const [dateTugasElement, setDateTugasElement] = useState(
    daftarTugas.map((tugas) => {
      const day = tugas.tanggal.getDate();
      const month = tugas.tanggal.getMonth();
      const year = tugas.tanggal.getFullYear();
      return `date_${day}_${month}_${year}`;
    })
  );
  useEffect(() => {
    setDaftarTugas(props.daftarTugas);
  }, [props.daftarTugas]);
  useEffect(() => {
    setDateTugasElement(
      daftarTugas.map((tugas) => {
        const day = tugas.tanggal.getDate();
        const month = tugas.tanggal.getMonth();
        const year = tugas.tanggal.getFullYear();
        return `date_${day}_${month}_${year}`;
      })
    );
  }, [daftarTugas]);
  useEffect(() => {
    updateCalendar();
  }, [dateTugasElement]);
  useEffect(() => {
    props.onUpdate(activeStartDate);
  }, [activeStartDate]);
  const updateCalendar = (val) => {
    if (val && val.activeStartDate) {
      setActiveStartDate(val.activeStartDate);
    }
    dateTugasElement.map((className) => {
      const dateElement = document.querySelector(`.${className}`);
      if (dateElement !== null) {
        dateElement.classList.add("react-calendar__tile--adatugas");
      }
    });
  };
  return (
    <div className="flex justify-center">
      <Calendar
        onClick={updateCalendar}
        onChange={updateCalendar}
        tileClassName={(val) => {
          const day = val.date.getDate();
          const month = val.date.getMonth();
          const year = val.date.getFullYear();
          return `date_${day}_${month}_${year}`;
        }}
        onViewChange={updateCalendar}
        onActiveStartDateChange={updateCalendar}
      />
    </div>
  );
};

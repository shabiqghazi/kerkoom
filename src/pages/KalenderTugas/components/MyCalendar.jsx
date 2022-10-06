import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style/calendar.css";

export const MyCalendar = () => {
  return (
    <div className="flex justify-center">
      <Calendar onChange={(val) => console.log(val)} />
    </div>
  );
};

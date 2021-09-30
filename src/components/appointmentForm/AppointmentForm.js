import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <ContactPicker contacts={contacts} setContact={setContact} contact={contact}/>
        <input type='date' min={getTodayString()} placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <input type='time' placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />
        <input type='submit' value='Add Appointment'/>
      </form>
    </div>
  );
};

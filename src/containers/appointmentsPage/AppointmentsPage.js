import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const { contacts, appointments, addAppointment } = props;
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('Options')
  const [date, setDate] = useState('');
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (title === '' || contact==='Options' || date === '' || time === '') {
      alert('Please fill the empty input space')
    } else {
      addAppointment(title, contact, date, time)
      setTitle('')
      setContact('Options')
      setDate('')
      setTime('')
    }

  };

  return (
    <div>
{        console.log(contact)
}
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arr={appointments} />
      </section>
    </div>
  );
};

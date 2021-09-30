import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{name: 'Soumya', phone: 9179152436, email: 'soumya@gmail.com'}, {name: 'Swati', phone: 9340580940, email: 'swati@gmail.com'}, {name: 'Anku', phone: 1234567890, email: 'anku@gmail.com'}])
  const [appointments, setAppointments] = useState([{title: 'Doctor meeting', contact: '', date: '12/11/2020', time: '8:20PM'}, {title: 'Lawyer Meeting', contact: '', date: '15/11/2020', time: '8:20PM'},{title: 'Swimming classes', contact: '', date: '22/1/2010', time: '7:20PM'}])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function addContact(name, phone, email){
    setContacts(prevArr=> [...prevArr, {name:name, phone:phone, email: email}])
  }

  function addAppointment(title, contact, date, time) {
    setAppointments(prevArr=> [...prevArr, {title: title, contact: contact, date: date, time:time}])
  }

  return (
    <>  
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              addAppointment={addAppointment}
              contacts={contacts}
              appointments={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    function phonenumber(phone) {
      var phoneno = /^\d{10}$/;
      if (phone.match(phoneno)) { 
        return true;
      } else {
          alert("Please enter a valid phone number");
        return false;
      }
    }


    if(name=== '' || phone=== '' || email === ''){
      alert('Please fill the empty input')
    } else if (contacts.map(obj => Object.values(obj).map(item => item).includes(name)).includes(true)) {  
      alert('The name is already available')
      setName('');
      setPhone('');
      setEmail('')
    } else if (phonenumber(phone)){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          arr={contacts}
        />
      </section>
    </div>
  );
};

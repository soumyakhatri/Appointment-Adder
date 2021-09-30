import React from "react";

export const ContactPicker = (props) => {
  const{contacts, setContact, contact} = props;
  //contacts is an array of objects

  return (
    <div>
      <select onChange={(e)=> setContact(e.target.value)} value={contact}>
        <option>Options</option>
        {contacts.map((obj, index)=> (<option key={index}>  {obj.name} </option>))}
        
      </select>
    </div>
  );
};

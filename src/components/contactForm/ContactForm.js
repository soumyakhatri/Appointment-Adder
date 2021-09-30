import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type='number' placeholder='phone number' pattern={/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        <input type='email' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type='submit' value='Add Contact'/>
      </form>
    </div>
  );
};
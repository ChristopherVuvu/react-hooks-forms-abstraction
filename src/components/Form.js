import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Henry",
    admin: false,
  })

  //create a function to handle changes
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value

    //use 'checked' property for checkboxes instead of 'value'. 
    //This is to define the checkbox
    if(event.target.type === "checkbox"){
      value = event.target.checked;
    }

    //set a formData to spread and add the new name value
    setFormData({
      ...formData,
      name: value,
      });
  }

  //This function will handle the submit button event
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  //return the form values and attache the corresponding events
  return (
    <form onSubmit = {handleSubmit}>
      <input 
      type="text" 
      name="firstName"
      onChange={handleChange} 
      value={formData.firstName} 
      />
      <input 
      type="text" 
      name = "lastName"
      onChange={handleChange} 
      value={formData.lastName} 
      />
      <input 
      type="text" 
      name = "admin"
      onChange={handleChange} 
      value={formData.admin} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

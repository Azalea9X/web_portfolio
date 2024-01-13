import React, { useState } from "react";
import { Checkbox, Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Delete() {
  const {contact_id} = useParams();
  const DeleteData = async() => {
    try {
  
        const uri = "http://localhost:1337/api/v1/customers/createusers"


const response =  await axios.delete(`http://localhost:5000/items/${contact_id}`);
console.log(response); 
} catch (error) {
  console.log(error);

  };
}

  return (
    <DeleteData />
  );
}

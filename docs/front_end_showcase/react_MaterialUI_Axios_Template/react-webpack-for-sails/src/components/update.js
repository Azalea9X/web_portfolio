import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Update() {
  const { contact_id } = useParams(); // Get the contact_id from the URL parameter

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const flightsURL = "http://localhost:1337/api/v1/flight_info/update/";
  const updateData = () => {
    // Use the dynamic contact_id in the URL to update the specific contact
    axios.patch(`flightsURL/${contact_id}/update`, {
      firstName,
      lastName,
      name,
      breed,
      species,
    });
  };

  return (
    <>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <h2>Owner's pets</h2>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Pet Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Breed</label>
          <input
            name="breed"
            type="text"
            value={breed}
            placeholder="Pet breed"
            onChange={(e) => setBreed(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Species</label>
          <input
            name="species"
            type="text"
            value={species}
            placeholder="Pet species"
            onChange={(e) => setSpecies(e.target.value)}
          />
        </Form.Field>

        <Button onClick={updateData} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

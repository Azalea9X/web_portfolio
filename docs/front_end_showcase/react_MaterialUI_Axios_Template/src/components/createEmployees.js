import React, { useState } from "react";
import {Form } from "semantic-ui-react";
import axios from "axios";
 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateEmpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>New customer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Your information please
          </Typography>
          <CreateCust />
        </Box>
      </Modal>
    </div>
  );
}

function CreateCust() {
  const uri = "http://localhost:1337/api/v1/employee/add"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
 

  async function postData() {
    try {


  const postData =  await axios.post(`${uri}`, {
firstName, 
lastName, 
email, 
password, 
phone, 
username, 
 
  });

  console.log(postData);

} catch (error) {
  console.log(error);

  };
  }
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
        <h2>Your email</h2>
        <Form.Field>
 
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={username}
    
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            type="text"
            value={password}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            value={phone}
            placeholder="Customer's phone number phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        
    
      </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}



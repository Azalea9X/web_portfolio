import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, DialogTitle, Dialog, PersonIcon, AddIcon, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Item } from 'semantic-ui-react';
 
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './../output.css'; 

const emails = ['username@gmail.com', 'user02@gmail.com'];
const Form1= () => {
  return (
<>
<form action="http://localhost:1337/api/v1/contact/add">
<label htmlFor="firstName">First Name 
<input type="text" name="firstName" id="firstName" /></label>

<label htmlFor="lastName">First Name 
<input type="text" name="lastName" id="lastName" /></label>

<label htmlFor="name">First Name 
<input type="text" name="name" id="name" /></label>

<label htmlFor="breed">First Name 
<input type="text" name="breed" id="breed" /></label>

<label htmlFor="species">First Name 
<input type="text" name="species" id="species" /></label>

<input type="submit" value="Submit" />

</form>
</>


  )
}

function AddData({id, firstName, lastName, name, breed, species}) {

    const params = useParams(); 
  

<Form1 />

}
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <>
<form className="add " action="http://localhost:1337/api/v1/contact/add" method="post">
<label htmlFor="firstName">First Name 
<input type="text" name="firstName" id="firstName" /></label><br />
<br />
<label htmlFor="lastName">Last Name 
<input type="text" name="lastName" id="lastName" /></label>
<br />
<br />
<label htmlFor="name">Name 
<input type="text" name="name" id="name" /></label>
<br /><br />
<label htmlFor="breed">Breed
<input type="text" name="breed" id="breed" /></label>
<br />
<br />
<label htmlFor="species">Species
<input type="text" name="species" id="species" /></label>
<br /><br />
<input className="p-relative left-[90px]" type="submit" value="Submit" />

</form>

</> </Dialog>
  )}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>

      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
Add Data
      </Button>
  
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, DialogTitle, Dialog, PersonIcon, AddIcon, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Item } from 'semantic-ui-react';
 
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
 
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

  
const emails = ['username@gmail.com', 'user02@gmail.com'];


function FlightInfo({id}) {
const id1 = {id};
    const params = useParams(); 
console.log(params); 
    const baseURL = `http://localhost:1337/api/v1/flight_info/${id}`;

    const [isLoading, setLoading] = useState(true);
    const [owner, setOwner] = useState([]);
    const [contactsData, setContactsData] = useState([]);
    // flight_number, departure_date, departure_time, arrival_date, arrival_time, origin, destination, customer_id 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(baseURL);
          let data = response.data.flights;
          console.log(data);
          
          setContactsData(data); 
          
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
        
      fetchData();
    }, []);
      
   // flight_number, departure_date, departure_time, arrival_date, arrival_time, origin, destination, customer_id 

    const columnsContact = [
     
      {
        field: "flght_number",
        headerName: "Flight #",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "departure_date",
        headerName: "Departure date",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "departure_time",
        headerName: "Departure time",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "arrival_date",
        headerName: "Arrival date",
        type: "string",
        width: 110,
        editable: false,
      },
      {
        field: "arrival_time",
        headerName: "Arrival time",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "origin",
        headerName: "Origin",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "destination",
        headerName: "Destination",
        type: "string",
        width: 110,
        editable: true,
      },
      
      
      {
        field: "cust_id",
        headerName: "Customer's id",
        type: "int",
        width: 110,
        editable: true,
      },
       
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        width: 1560,
        height: 500,
        renderCell: (params) => (
          <div>
            <button className="btnUpd" style={{position: "relative", top: "-0px"}}
              onClick={(async () => {
                try {
                  debugger;
                  async function update() {
                    await axios.patch(
                         // flight_number, departure_date, departure_time, arrival_date, arrival_time, origin, destination, customer_id 

                      `http://localhost:1337/api/v1/flight_info/update/${params.row.id}`,
                       
                      {
                      flight_number: params.row.flght_number,
                      departure_date: params.row.departure_date,
                      departure_time: params.row.departure_time,
                      arrival_date: params.row.arrival_date,
                      arrival_time: params.row.arrival_time,
                      origin: params.row.origin,
                      destination: params.row.destination,
                      customer_id: params.row.cust_id,

                      }
                    );
                    console.log("Updated");
                  
                  }
                  //For the username table- email, username, password, firstName, lastName, phone, role, age, cust_id, employee_id
               update(); 
                 
  
                } catch (e) {
                  console.error(e);
                } finally {
                  console.log("Updated");
                }})
                }>
              
            
              <FaRegSave className="saveIcon"/>
           
           
            </button>
  
            <button className="btnDel" style={{position: "relative", top: "-0px"}}
              onClick={(async () => {
                try {
                const delete1 = async () => {  await axios.delete(
                    `http://localhost:1337/api/v1/flight_info/delete/${params.row.id}`,
                    {
  id: params.row.id
                    }
                                        );}
                    delete1();
  
                } catch (e) {
                  console.error(e);
                } finally {
                  console.log("Updated");
                }})
         }>
              
            
              <FaRegTrashAlt className="delIcon"/>
            </button>
            <button style={{position: "relative", top: "-0px"}}  
            onClick={() => {
           
   
            }}
            >
         
               </button>         </div>
        ),
      },
    ]
  
    return (
      <>
        <DataGrid 
          rows={contactsData}
          columns={columnsContact}
          pageSize={35}
          rowHeight={50}
          loading={isLoading}
          autoHeight
          getRowId={(row) => row.id}
  
  
  /></>
    )

}
SimpleDialog.propTypes = {
  id: PropTypes.number.isRequired, // Add the 'id' prop type
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function SimpleDialog(props) {
  const { onClose, selectedValue, open, id } = props; // Add the 'id' prop to the destructuring

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set flight information</DialogTitle>
      <FlightInfo id={id} /> 
    </Dialog>
  );
}

export default function FlightsInfoDialog({ id }) { // Receive the 'id' prop from the parent component
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    console.log(id);
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
        Change customer's flight information
      </Button>
      <SimpleDialog
        id={id} // Pass the 'id' prop to the 'SimpleDialog' component
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

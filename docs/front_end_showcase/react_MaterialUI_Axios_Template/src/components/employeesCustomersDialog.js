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


function CustomersInfo({id}) {
const id1 = {id};
    const params = useParams(); 
console.log(params); 
    const baseURL = `http://localhost:1337/api/v1/contact/${id}`;

    const [isLoading, setLoading] = useState(true);
    const [owner, setOwner] = useState([]);
    const [contactsData, setContactsData] = useState([]);
    // flight_number, departure_date, departure_time, arrival_date, arrival_time, origin, destination, customer_id 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(baseURL);
          let data = response.data.customers;
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
      
  
    const columnsContact = [
     
      {
        field: "firstName",
        headerName: "First name",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "lastName",
        headerName: "Last name",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        type: "string",
        width: 110,
        editable: true,
      },
      {
        field: "username",
        headerName: "Username",
        type: "string",
        width: 110,
        editable: false,
      },
      {
        field: "phone",
        headerName: "Phone",
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
                 async function update() {
                  
                  debugger;
                  await axios.patch(
                    `http://localhost:1337/api/v1/contact/update/${params.row.id}`,
                   
                    {
                      email: params.row.email,
                      phone: params.row.phone,
                      role: params.row.role,
                      cust_id: params.row.cust_id,
                      firstName: params.row.firstName,
                      lastName: params.row.lastName,
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
                    `http://localhost:1337/api/v1/contact/delete/${params.row.id}`,
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
      <DialogTitle>Set user information</DialogTitle>
      <CustomersInfo id={id} /> 
    </Dialog>
  );
}

export default function EmployeesCustomersDialog({ id }) { // Receive the 'id' prop from the parent component
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
        Change customer's information
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Item } from "semantic-ui-react";
import  CreateEmpModal  from "./createEmployees";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import EmployeesCustomersDialog from "./employeesCustomersDialog";
const emails = ['username@gmail.com', 'user02@gmail.com'];
import AddData from "./addData"; 
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import Paper from '@mui/material/Paper';
let params1; 

const employeesURL = "http://localhost:1337/api/v1/employee";
//const contactsURL = "http://localhost:1337/api/v1/contact"


//For the username table- email, username, password, firstName, lastName, phone, role, age, cust_id, employee_id


const DeleteData = () => {
  const { contact_id } = useParams();
  axios.delete(`${employeesURL}delete/${contact_id}`, {});
  console.log("Deleted");
};


function Employees() {const [rowId, setRowId] = useState(null);

  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [contactData, setContactData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  let data = [];


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${employeesURL}`);
      setContactData(result.data.employees);
      setLoading(false);
    };
  
    fetchData(); // Call the fetch function directly
  }, []); // Empty dependency array ensures the effect runs only once
  
  

   
  



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
          <button className="btnUpd" 
            onClick={(async () => {
              try {
                debugger;
                async function update() {
                  await axios.patch(
                    `http://localhost:1337/api/v1/employee/update/${params.row.id}`,
                   
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

          <button className="btnDel" 
            onClick={(async () => {
              try {
              const delete1 = async () => {  await axios.delete(
                  `${employeesURL}/delete/${params.row.id}`,
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
          <button 
          onClick={() => {
         
 
          }}
          >
       
           <EmployeesCustomersDialog id={params.row.id}/>    </button>         </div>
      ),
    },
  ]
 

  return (
    <>
    <h1 className="text-5xl">Are you a new user?</h1>
    <Paper elevation={3} sx={{p: 2, mx: 'auto', maxWidth: '80%'}}>
    <CreateEmpModal />
 
      <DataGrid
        rows={contactData}
        columns={columnsContact}
        pageSize={5}
        loading={isLoading}
        getRowId={(row) => row.id}


/>
 </Paper >

</>
  )
}
export default Employees
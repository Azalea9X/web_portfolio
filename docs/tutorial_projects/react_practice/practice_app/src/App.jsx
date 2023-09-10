//@flow
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import proptypes from "prop-types";
import {Routes, Link, Outlet, Route} from "react-router-dom"; 
import {Home, About, History, Contact, Whoops404} from "./pages.jsx";

 
function App() {
    return(
        
<Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/*" element={<Whoops404/>}/>
     <Route path="/about" element={<About/>}/> 
        <Route path="/about/history" element={<History />} />
     <Route path="/contact"  element={<Contact/>}/>
    

</Routes>
    );
 


}

 
export default App;
/*Note


     */


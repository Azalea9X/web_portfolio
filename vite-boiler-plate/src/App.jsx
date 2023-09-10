//@flow
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import proptypes from "prop-types";
import {Routes, Route} from "react-router-dom"; 
import {Home, About, Services, Events, Products, Contact, Whoops404} from "./pages.jsx";

 
function App() {
return(<>  

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Whoops404/>}/>
    <Route path="/services" element={<Services/>}/>

</Routes>
</>
);

}

 
export default App;
/*Note


     */


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {render} from "react-dom"; 
import {BrowserRouter as Router} from "react-router-dom"; 
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Router><App/></Router>);

//https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {render} from "react-dom"; 
import {BrowserRouter as Router} from "react-router-dom"; 

render(<Router><App/></Router>, document.getElementById("root"));
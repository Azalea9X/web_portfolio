import React from "react";
import {Link} from "react-router-dom"; 
import "./App.css";
import { useRef, useReducer, useEffect, useState} from "react";
import {Practice} from "./custom_hooks.jsx"; 
function Navbar() {
    return (
        <> <nav><ul>
        <Link to="/">Home</Link>
        <Link to="/about"><a>About</a></Link>
        <Link to="/contact"><a>Contact</a></Link>
        </ul>
       </nav>
   
       </>
    )
}


export function Home() {
    return(<>
               <Navbar />
                
               <Practice />
</>
    )
}

export function About() {
  function Content(props) {
return(<>   <h1>Hi my name is {props.name}.</h1> 
<p>It's nice to meet you.</p>
<p>I am a serious designer and developer and I hope to get your acquaintance. </p>  
</> )
}
  

  return(<>
               <Navbar />
               
                
               <Content name="Jacob"/>
               
</>
    )
}

export function History() {
    return ( 
        <>
        <Navbar />
        <h1> Our history</h1>
        </>
    )
}


export function Contact() {
    function Content(props) {
  return(<><h1>Contact us at xxxxxx@gmail.com</h1> 
<h2>Our contact page is currently under construction. </h2>  
</> )
  }
    
    return(<>
                 <Navbar />
                  
                 <Content/>
  </>
      )
  }
export function Whoops404() {
 let location=useLocation(); 
      

return(
        <>
        let location=useLocation(); 
        {console.log(location)}
        <Navbar />
        <h1>404 not found!!</h1>
        </>
    )
}
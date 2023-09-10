import Link from "next/link"; 
import React from "react"; 
import ReactDOM from "react"; 

export default function Header(){
const style={
    marginLeft: "50px !important"
}


    return(
    <><Link style={style} href="/">Home</Link>
    <Link style={style} href="/pets">Pets</Link>
     
 
    </>
)    
}
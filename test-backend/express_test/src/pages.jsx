import React from "react";
import {Link} from "react-router-dom"; 

function Navbar() {
    return (
        <> <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
        
       </nav></>
    )
}
export function Home() {
    return(
        <>
       <h1>Hello!ffff</h1>
      <Navbar />
       </> )
}

export function About() {
    return (
        <>
        <h1>[About]</h1>
        <Navbar />
        </>
    )
}

export function Events() {
    return (
        <>
        <h1>[Events]</h1>
        <Navbar />
        </>
    )

}

export function Products() {
    return (
        <>
        <h1>[Products]</h1>
        <Navbar />
        </>
    )
}

export function Contact() {
    return (
        <>
        <h1>[Contact]</h1>
        <Navbar />
        </>
    )
    }

export function Services() {
    return(
        <>
        <h1>[Services]</h1>
        <p>ZZZ yadadayadayada</p>
        </>
    )
}

export function Whoops404() {
    return(
        <>
        <h1>Resource not available</h1>
        let location=useLocation(); 
        {console.log(location)}
        <Navbar /></>
    )
}
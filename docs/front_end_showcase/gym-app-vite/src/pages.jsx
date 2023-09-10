import React from "react";
import {Link} from "react-router-dom"; 
import "./App.css";
import { useRef, useReducer, useEffect, useState} from "react";
import {useInput} from "./custom_hooks.jsx"; 
function Navbar() {
    return (
        <> <nav><ul>
        <Link to="/">Home</Link>
        <Link to="./../about">About</Link>
        <Link to="./../events">Events</Link>
        <Link to="./../products">Products</Link>
        <Link to="./../contact">Contact</Link>
        </ul>
       </nav></>
    )
}


export function Home() {
    return(<>
               <Navbar />
               <h1>Welcome to THE GYM</h1>
      
<img src={"https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }/>


 <main>
       <p>Welcome to THE GYM. This isn't like an other gym that you have been to before. This is the gym. </p>
   <p>At here, we are using a combination of personal trainers armed with an app that utilizes the latest artificial intelligence and other types of technology to help you stay in shape. We want to be your first place you go to when you really want to take care of your body. </p></main>
          
       </> )
}

export function About() {
const AppText = 
function() {
return(<><main className={"About"}>
<p>Welcome to the most real gym ever, your one-stop shop for all things fitness! We offer a wide range of classes and equipment to help you reach your fitness goals, whatever they may be. Whether you're a beginner or a seasoned athlete, we have something for you.</p>

<p>Our team of experienced personal trainers is here to help you every step of the way. They'll create a personalized fitness plan that's right for you and help you stay motivated. We also offer a variety of group classes, so you can work out with others and make new friends.</p>

<p>In addition to our state-of-the-art fitness equipment, we also have a variety of amenities to make your workout experience even better. Our locker rooms are spacious and clean, and we have a sauna and steam room for you to relax in after your workout. We also have a cafe that serves healthy snacks and drinks.</p>

<p>At the most real gym ever, we're committed to helping you reach your fitness goals. We offer a supportive environment where you can feel comfortable working out and reaching your full potential. Come see us today and experience the difference!</p></main></>)}; 

    return (
        <>
        <Navbar />
        <h1>About</h1>
        <img style={{marginBottom: "6rem", transform: "translateX(-2rem)"}} src={"https://images.unsplash.com/photo-1619385006580-6f5550cabbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt="A women in a tank-top" />
        <AppText style={{transform: "translateX(-4rem) translateY(-3rem)"}} />
      
        </>
    )
}

export function Events() {
    let className1 = 'Events'; 
    let main = 'Main';  
    return (
       
        <div className={className1} > 
               <Navbar />
                <h1>Events</h1>
        
                   <main>
<img src={"https://images.unsplash.com/photo-1589739900869-082b93d8f224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt={"A chalbkboard"} style={{minHeight: "900px"}}/>
        <h2 style={{transform: "translateX(2rem) translateY(-45rem)"}}>What we have going on for the next month</h2>
        <table className={"Classes"} style={{transform: "translateY(-45rem) translateX(10rem)"}}>
        <tr><th>Class</th>
        <th>Instructor</th> 
        <th>Focus</th>
        <th>Price</th></tr>
        <tr>
        <th>Hot Yoga</th>
        <td>Sally Price</td>
        <td>Endurance</td>
        <td>$66</td>
        </tr>

<tr><th>Barre</th>
<td>Mike Hospinger</td>
<td>Strength</td>
<td>Free with membership</td></tr>
<tr><th>Strength training</th>
<td>Sammy Bates</td>
<td>Strength</td>
<td>$5</td>
</tr>
<tr>
<th>Zoomba</th>
<td>Andrew Lana and Arnette Bingsby</td>
<td>Fun/endurance</td>
<td>$5</td>
</tr>
        </table>
        </main>

        </div>
    );

}

export function Products() {
    let img = document.querySelectorAll("img"); 
    return (
        <>  <head>
   
            </head> <Navbar />
        <h1 id={"Products"}>Products</h1>
        <main>
<p>We also offer a variety of fitness products for sale in our pro shop. Check out our selection of apparel, footwear, and accessories.</p>
<div id={"Gallery"} style={{marginLeft:"-3rem"}}>


<img className={"columnA"} src={"https://images.unsplash.com/photo-1598575522694-d55ada5e48f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtldHRsZSUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt={"Man using weights"} />

<img className={"columnB"}  src={"https://plus.unsplash.com/premium_photo-1669243439182-00abdd2ea5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80"} alt={"A kettlebell"} />

<img className={"columnA"}  src={"https://images.unsplash.com/photo-1662045010180-a2b1ac1652b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt={"A women climbing on a ladder"} />

</div>
</main>
        </>
    )
}

 



export function ContactUs() {
    
const [emailProps, resetEmail] = useInput("");
const [fnameProps, resetFName] = useInput(""); 

    const submit = (e) => {
        alert(`${fnameProps.value}, ${emailProps.value}`);
        e.preventDefault();

        
      if (emailProps.value <6) {
        document.querySelector("form").innerHTML += "<p>Please enter a bigger email. Your email is invalid. </p>";
      };
        resetEmail("");
        resetFname("");

    }
    return (
    <>
    <form onSubmit={submit} name={"Contact"} id={"Contact"} action={"/"} method={"Post"}><br/>
  
<label for="Email">
Email <input type="Email"  {...emailProps} />
</label>
<br />
<label for="Fname">
Fname <input id={"Fname"} type="text" {...fnameProps}/>
</label>
 <br />
<input type="submit" value="Submit" name="Submit" />

</form>
 
 
         
    </>
    
        )
}
export function Contact() {
    

        return (
        <><Navbar />
        <h1>[Contact]</h1>
        <h1>Contact Form</h1>
<ContactUs />
<p><strong>Please fill out the following form to contact us. We will get back to you as soon as possible.</strong></p>

<p>Thank you for choosing the most real gym. I hope that you choose us and have a very good rest of your day.</p>
        </>
    )
    }

export function Services() {
    return(
        <>
        <h1>[Services]</h1>
        <Navbar />
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
import React from "react";
import ReactDOM from "react-dom/client";

import { EventHandler, useReducer, useState, useEffect} from "react";


function Header(props) {

    return (
    <><header>
        <h1>{props.name}'s page</h1></header>
        
        <footer>Copyrighted: {props.year}</footer>
        </>
    )
}

function Main(props) {
   const [checked, setChecked] = useReducer((checked => !checked), false);

return (<>
     <main>
<form>
<label>{checked ? "Checked": "Not checked"}
<input type="checkbox" value={checked} on onChange={setChecked} /></label>

</form>
    </main>
    </>)
}
export function Practice() {
    return(
        <> <Header name={"Jacob"}
         food={"Pizza"} year={new Date().getFullYear()}/>
         <Main />
        </>

    )
}

/*function GithubUser({name, url, img}) {
    return(<><h2>{name}</h2>
    <h2>URL: {url}</h2>
    <img src={img} alt="gravatar" />
    </>)
}
function Practice_github() {

    const [data, setData] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(null); 
useEffect(() => {
    setLoading(true); KQRP-VNJQ
    fetch(`https://api.github.com/users/Azalea9x`).then((response) => response.json()).then(setData).then(() => setLoading(false)).catch(setError);
}, []); 
if (loading) return <h1>Loading...</h1>; 
if (error) return <pre>{JSON.stringify(error)}</pre>
if (!data) return null;

if (data) {
    console.log(data);
    return( <GithubUser name={data.login} url={data.url} img={data.avatar_url}/>)
}

return <h2>Data</h2>

}

    
 




/
03. React Components
03_01: Creating a react component
We can't add a <Header /> or a <Main /> side by side, we need the fragment for that. 


03_02: Adding component properties
03_03: Working with lists
03_04: Adding keys to list items
const dishes=["Apple", "Gourmet Pizza", "Chicken"]; 

const dishObjs = dishes.map((dish, i) => ({
    id: i, 
    title: dish
}))


function Header(props) {

    return (
    <><header>
        <h1>{props.name}'s page</h1></header>
        <h2>People really like the {props.food} here. </h2>
        <footer>Copyrighted: {props.year}</footer>
        </>
    )
}

function Main(props) {
    return (<>
    <main>
        <ul>
{dishObjs.map((dish) => {
    return <li key={dish.id}>{dish.title}</li>
})}

        </ul>

    </main>
    </>)
}
export function Practice() {
    return(
        <> <Header name={"Jacob"}
         food={"Pizza"} year={new Date().getFullYear()}/>
         <Main />
        </>

    )
}

Essentially, your data might already look like this. Keys are one of the things that react requires. Eve recommends using objects instead of arrays so that way they already have a key index. 

Using the map function, we can create a list of objects. 

const dishes=["Apple", "Gourmet Pizza", "Chicken"]; 

const dishObjs = dishes.map((dish, i) => ({
    id: i, 
    title: dish
}

I liked the way that auto-complete helped with that note. Thanks auto-complete. 

03_05: Displaying images with react

03_06: Using fragments

4. React state in the component tree
04_03: Destructuring arrays and objects
Destructuring will help us deal with states in application. 

In the App function, let's say we add an attribute ot the <App library="app"},  you would write {props.library}. In the function component, we write function App({library}), this is destructuring. We can also destructure arrays. 

In this example, const [1, 2] = [1, 2, 3, 4], we are destructuring the list of the second array by referring it to the first two values. 

04_04: Understanding the useState hook
The most modern way to handle state functions in an app is to use the function useState(). The first thing we'll want to do is import a function called useState. 

function Main(props) {
const [emotion, setEmotion] = useState("happy");
return (<>
     <main>
<h1>My current emotion is {emotion}</h1>
<button onClick ={() => setEmotion("Sad")}>Sad</button>
<button onClick ={() => setEmotion("Excited")}>Excited</button>
<button onClick ={() => setEmotion("Happy")}>Happy</button>
    </main>
    </>)
}

Essentially, what we're doing is using the useState function to create a state variable and then we are using that state variable to pass it on to the <h2> as a {emotion} variable, which, will create the resulting effect as a result of clicking on the aforementioned button. 


04_05: Working with useEffect
useEffect is a hook that allows us to perform side effects in a component. 

useEffect(() => {
    // perform side effects
}

This lets us perform side-effects that are not relevant to the component's render, things like console messages, loading data, could all benefit from it. Let's take a basic look at it. First thing is to import it. Then, within the component we will use it. 

useEffect(()=> {
    console.log(`I'm feeling ${emotion} right now.`)
}, [emotion])

Essentially, the useEffect method can keep track of different state variables and can be used for testing purposes, or, in the sense of loading data. We also are using a dependency array, which will store the changes to the emotion and make it sure that it only fires once per reload. 


04_06: Understanding the dependency array
We use it to keep track of different variables. 

const [secondary, setSecondary] = useState("tired"); 
useEffect(()=> {
    console.log(`I'm feeling ${emotion} and ${secondary} right now.`)
}, [emotion, secondary])

<button onClick={() => {
    setSecondary("Grateful");
}}>Set Secondary</button>

And of course <h2>My secondary emotion is {secondary}</h2>. 

Without the useEffect, we will only see it's tired over and over, with the [secondary], that will call it. You can pass more than one of them if you wanted to. Let's say we wante dot call the function, when the other emotions changed, you can do it!


04_07: Incorporating useReducer

function Main(props) {
   const [checked, setChecked] = useReducer((checked => !checked), false);

return (<>
     <main>
<form>
<label>{checked ? "Checked": "Not checked"}
<input type="checkbox" value={checked} on onChange={setChecked} /></label>

</form>
    </main>
    </>)
}

Essentially, what we're doing is making the value of this a variable, I think, and, that's why it works. Because it's a checkbox, one, two, it also works because you set the value to a variable, the variable hooks within the component, the state of the checkbox changes as you click on the checkbox. It's very useful. 


*Hook examples: 

05_01: Working with uncontrolled components- using useRefs 

  const txtTitle = useRef(); 
    const hexColor = useRef(); 

    const submit = (e) => {
        e.preventDefault(); 
        const title = txtTitle.current.value; 
        const color = hexColor.current.value; 
        alert(`${title}, ${color}`)
    }
    return (
    <>
    <form onSubmit={submit} name={"Contact"} id={"Contact"} action={"/"} method={"Post"}><br/>
 <input ref={txtTitle} type="text" placeholder="color..title" />
 <input ref={hexColor} type="color" />

 <br />
<input type="submit" value="Submit" name="Submit" />

</form>

An uncontrolled component is where we manage components outside of state. 

05_02: Creating controlled form elements
const [title, setTitle] = useState("");
const [color, setColor] = useState("#000"); 

    const submit = (e) => {
        e.preventDefault();

        alert(`${title}, ${color}`)
        setTitle("");
        setColor("");

    }
    return (
    <>
    <form onSubmit={submit} name={"Contact"} id={"Contact"} action={"/"} method={"Post"}><br/>
  
 <input onChange={(e) => {
    setTitle(e.target.value);
 }} type="text" placeholder="color..title" />
 <input onChange={(e) => {
    setColor(e.target.value);
 }} value={color} type="color" /><br /> 

 <br />
<input type="submit" value="Submit" name="Submit" />

</form>

I think that Even called this a controlled component? Using stateful values, with the useState() function. We can also do custom functions. 

05_03: Building a custom hook 

This form element has two different inputs, we want to clear out what we've inputed after we've submitted the form. A custom hook is a function, and, this function will always start with the keyword use. 

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue); 
    return[
        {value, onChange: (e)=> setValue(e.target.value)}, 
        () => setValue(intialValue) 
    ];
}

export function ContactUs() {
    
const [titleProps, resetTitle] = useInput("");
const [colorProps, resetColor] = useInput("#000"); 

    const submit = (e) => {
        e.preventDefault();

        alert(`${titleProps.value}, ${colorProps.value}`)
        resetTitle("");
        resetColor("");

    }
    return (
    <>
    <form onSubmit={submit} name={"Contact"} id={"Contact"} action={"/"} method={"Post"}><br/>
  
 <input {...titleProps} type="text" placeholder="color..title" />
 <input {...colorProps}  type="color" /><br /> 

 <br />
<input type="submit" value="Submit" name="Submit" />

</form>

With this, this is something that you should not use too frequently, but, it works in this case because you are not using the different items that are within the useInput functions on an the inputs. A hook is a piece of reusable code, and, we can use it in the form any time that we are re-using input. 

This is something flexible and reusable across components. 

05_04 Choosing a Form library
Ton of different form libraries- first is called Formik.org, thinking of forms hoalistically. 

React-hook-form.com- helps you with creating forms with validation, a lot of cool things in the API with type-script.

usehooks.com is another example, not for forms in particular, but, a lot of different resources, or, recipes that are different types of hooks, and, you can open all of them in codesandbox. All of these are good resources. 

/* 06_01- Fetching data with hooks

Using useState and useEffect. The array is helpful so that you are only making one request. This should return that data.
 
export function Practice() {
const [data, setData] = useState(null); 
useEffect(() => {
    fetch(`https://api.github.com/users/Azalea9x`).then((response) => response.json()).then(setData);
}, []); 

if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}
return <h2>Data</h2>

}

This will use useEffect, which is a side effect, to find the data, turn it into a response.json() and, then, calling setData(). My mistake previously was calling setData(data), when, data is already called, and, setData() allows you to change the value of it. Okay. Neat. 

06_02: Displaying data from an API 

The relevant pieces of code: 

function GithubUser({name, url, img}) {
    return(<><h2>{name}</h2>
    <h2>URL: {url}</h2>
    <img src={img} alt="gravatar" />
    </>)
}

if (data) {
    console.log(data);
    return( <GithubUser name={data.login} url={data.url} img={data.avatar_url}/>)
}

I believe that my example when I was doing this previously didn't work before because I was using the information that she was using exclusively. Either the API updated or my account has different information. 

06_03: Handling loading states
Loading, we're fetchind data, success, and, failed state in case something goes wrong. 

Relevant sections of code: 

 const [data, setData] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(null); 

useEffect(() => {
    setLoading(true); 
    fetch(`https://api.github.com/users/Azalea9x`).then((response) => response.json()).then(setData).then(() => setLoading(false)).catch(setError);
}, []); 
if (loading) return <h1>Loading...</h1>; 
if (error) return <pre>{JSON.stringify(error)}</pre>
if (!data) return null;

Here, the relevant section f this is adding a setLoading(false) on the useEffect, after you set the data, and, then, catching it, with a setError. This is a really useful use of the callback functions of the .then((). I understand why error works, I am not quite certain why loading works. 

06_04: Fetching data with GraphQL
export function graphQL_Practice() {

    const [data, setData] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(null); 
useEffect(() => {
    setLoading(true); 
    fetch(`https://snowtooth.moonhighway.com`, opts).then((response) => response.json()).then(setData).then(() => setLoading(false)).catch(setError);
}, []); 
if (loading) return <h1>Loading...</h1>; 
if (error) return <pre>{JSON.stringify(error)}</pre>
if (!data) return null;

if (data) {
    console.log(data);
    return( <>
{data.data.allLifts.map((lift) => {
    return (
        <>
        <Lift name={lift.name} 
        elevationGain={lift.elevationGain}
        status={lift.status}
        />
        </>
    )
})} 
</>)}
return <h2>Data</h2>

}

This is a look on how you are going to use graphQL in a react application. We have to make sure that we're referincing the correct data and that it is being displayed. You can make use of Fetch() with a graphQL data-set much like you can with a rest API! 

06_05: Working with render props

For this one, we're passing along some JSX in case the list happened to be empty. renderItem will pass on that fragment, ti will pass on the data, that will be passed in the <List /> fragment. It will display any data no matter what the data is and there even will be some list data. I did need help with this one and I had to copy the files from the solution folder. I am not exactly sure what I went wrong with here, but, I will definitely study it and make sure I get it right, but, I think I understand the general concept of it that I will study it and move on.

 const tahoe_peaks = [
{name: "Freel", elevation: 10891}, 
{name: "Monument", elevation: 10067}, 
{name: "Pyramid", elevation: 9983}, 
{name: "Tallac", elevation: 9735}
 ]; 
 function List({ data, renderItem, renderEmpty }) {
    return !data.length ? (
      renderEmpty
    ) : (
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
  }
 
export function Practice() {
return(
<>
<List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
</>

)
}

7. React-Router 

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
       </nav></>
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

Note- you also have native tools, such as react-router-dom, such as {link}. react-router-dom is a library that allows you to create a router, and, to navigate between different pages. You write <Link to="/path">, let's paste it into there. Now, on each of them, we should be able to navigate successfully between pages. 


/@flow
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

Note, I was still not able to get the outlet element to work. I tried and tried, but, it seems like it just wasn't working for me. I was able to get the about/history to work much better. 


8. React Testing and Deployment
08_01: Using Create React App as a testing platform
08_02: Testing small functions with Jest
08_03: Introducing React Testing Library/
/**
 * @jest-environment jsdom
 */

/*
Okay, so, basically after a heck of a lot of research, there is a bit of a manual configuration that is needed to move the testing environment. 

import "@testing-library/jest-dom"; 

to the vite react app. A bit of a combination of following instructions from: https://zaferayan.medium.com/how-to-setup-jest-and-react-testing-library-in-vite-project-2600f2d04bdd, and https://github.com/testing-library/react-testing-library/issues/138, probably more the Github page, I was finally able to get it to work. The instructions were out-dated. I had to change it. Here, we are importing the jsdom-testing library and we are using the {getByText} to amke a variable render the <Star /> component, then, we are making a variable with the getByText() method to check for Cool Star, and, we're using an expect(h1).toHaveTextContent("Cool Star") to check if the h1 has the text content of Cool Star. 

None of it will work without the correct configuration. 

import {render} from "@testing-library/react"; 
import React from 'react';
import "@testing-library/jest-dom";

import {Star} from "./Star"; 

test("renders an h1", () => {
const {getByText} =  render(<Star />); 
const h1 = getByText(/Cool Star/); 
expect(h1).toHaveTextContent("Cool Star"); 
});

//https://stackoverflow.com/questions/65723708/react-testing-library-typeerror-expect-tohavetextcontent-is-not-a-functi


08_04: Testing events with React Testing Library

/**
 * @jest-environment jsdom
 */

/*import {render, fireEvent} from "@testing-library/react"; 
import React from 'react';
import "@testing-library/jest-dom";

import {Checkbox} from "./checkbox"; 

import {checked} from "./checkbox";

test("Checkbox should change value of checked to true", () => {
    const {getByLabelText} = render(<Checkbox />); 
    const checkbox = getByLabelText(/checked/i);
    fireEvent.click(checkbox); 
    expect(checkbox).toBeChecked(); 

})

I am working on the solution slightly differently than Eve is. I could not get the toBe(true) function to work, instead, I had to use a workaround. There are other functions within the testing library to accomplish the same goal. This was one of them. 

08_05: Deploying to Netlify

*/

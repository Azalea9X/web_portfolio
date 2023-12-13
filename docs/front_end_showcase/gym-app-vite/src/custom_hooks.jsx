import React from "react";
import ReactDOM from "react-dom/client";

import { EventHandler, useReducer, useState} from "react";
export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue); 
    return[
        {value, onChange: (e)=> {setValue(e.target.value)}},
      

        
        
    
        
    ];
}







/*Hook examples: 

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



*/

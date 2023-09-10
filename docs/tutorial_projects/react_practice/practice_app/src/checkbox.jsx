import {useReducer} from "react"; 

export function Checkbox() {
     
    const [checked, setChecked] = useReducer((checked) => !checked, 
    false);

 
return (
    <>
<label htmlFor={checked}>{checked ? "checked" : "not checked"}
<input type="checkbox" value={checked} onChange={setChecked} /></label>
</>); 

}

import {Home} from "./pages"; 
import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

test("Multiplies by two", () => {
expect(multiply(2, 3)).toBe(6);
})

/*
08_02
function multiply(a, b) {
    return a * b; 
}

test("Multiplies by two", () => {
expect(multiply(2, 3)).toBe(6);
})

We're expecting that any time we run that function we are expecting that value. It says that function is going to give us an error since we don't have anything that it is returning yet. To fix it, we need to either get rid of default, or, import that as a module, rather than a function. Testing will let us know what the issue is. We're using the expect function to see what the value is. We're chaining on the matching. 

jest.io/docs/using-matchers. toBe is going to match for exact equality, but, there are others. You can match other items as well.  

08_03
React testing library


*/
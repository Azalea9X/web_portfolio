/**
 * @jest-environment jsdom
 */

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
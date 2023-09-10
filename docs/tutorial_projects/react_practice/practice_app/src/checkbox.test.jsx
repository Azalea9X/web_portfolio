/**
 * @jest-environment jsdom
 */

import {render, fireEvent} from "@testing-library/react"; 
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
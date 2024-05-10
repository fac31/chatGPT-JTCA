import { test, equal } from "/test-helpers.js";

//test that user input appears as a string

test("user input type appears as a string", () => {
    const userInput = document.querySelector('#input')

    equal(typeof userInput.value, 'string')
})

// test button and enter key both submit a user's input
/* split into 2 parts:
First that they are both equal to each other,
Second, test that the submit button works. 

If one button works and they are both equal to one another, then both buttons must work. */

//test 1
test("enter key and submit button are both equal to one another", () => {
    let submitButton = document.getElementById('submit')
    let myForm = document.getElementById('myForm')
    equal(submitButton === myForm)
})

// test 2
test("submit button works, hence enter key does too as ", () => {
    let submitButton = document.getElementById('submit')
    equal(submitButton === myForm)
})
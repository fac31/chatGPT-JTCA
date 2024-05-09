import { callApi } from "../api-requests.js"
import { test, equal } from "./test-helpers.js"

test("Check that H1 shows on page load ", () => {
    
    const h1 = document.querySelector(".page-heading")
    
    const actual = h1.textContent
    const expected = "Welcome to FAC Chat"

    equal(actual, expected);
}) 


test("Check that the API call returns a string", async () => {
    let apiResponse = null;

    await callApi("Hello")
    .then(res => {
        apiResponse = res.choices[0].message.content;
    })

    equal(typeof apiResponse, "string")
})
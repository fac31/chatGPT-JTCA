// import { callApi } from "../api-requests.js";
// import { test, equal, notEqual } from "./test-helpers.js";
// import formSubmit from "../main.js";

// let userInput = document.getElementById("input");
// let questionList = document.querySelector(".questionList");

// test("Check that H1 shows on page load ", () => {
//   const h1 = document.querySelector(".page-heading");

//   const actual = h1.textContent;
//   const expected = "Welcome to FAC Chat";

//   equal(actual, expected);
// });

// test("Check that the API call returns a string", async () => {
//   let apiResponse = null;

//   await callApi("Hello").then((res) => {
//     apiResponse = res.choices[0].message.content;
//   });

//   equal(typeof apiResponse, "string");
// });

// test("Check that new question and answer are added to the list", async () => {
//   userInput.value = "Hello world";

//   const initialFirstQuestion = document.querySelector(
//     ".questionList li:first-child .newQuestion"
//   );
//   // console.log('initialFirstQuestion ', initialFirstQuestion)

//   await formSubmit(new Event("submit"));

//   const newFirstQuestion = document.querySelector(
//     ".questionList li:first-child .newQuestion"
//   );
//   // console.log('newFirstQuestion ', newFirstQuestion)

//   notEqual(initialFirstQuestion, newFirstQuestion);

//   const newListItem = document.querySelector(".questionList li:first-child");
//   // questionList.removeChild(newListItem)
// });

import { callApi } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");
let questionList = document.querySelector(".questionList")

async function formSubmit() {
  console.log("stringSubmitted");

  const userInput = document.getElementById("input").value;
  question.innerHTML = userInput;

  callApi(userInput)
  .then(response => {
    let listItem = document.createElement("li")
    listItem.classList = 'historicItem'

    let newQuestion = document.createElement("p")
    listItem.classList
      answer.innerHTML = response.choices[0].message.content;
  });
  userInput = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});

//Keeps the history of previous questions and answers
  /*Empty list in HTML
Within list the new question and answer is added 
All done from main File
Local storage is incorporated for memory*/





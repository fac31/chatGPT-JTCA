import { callApi } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");
let questionList = document.querySelector(".questionList");
let userInput = document.getElementById("input");
let history = document.querySelector(".history")

export default async function formSubmit(e) {
  e.preventDefault();
  console.log("stringSubmitted");

  callApi(userInput.value).then((response) => {
    // console.log("userInput inside call", userInput.value);
    // console.log("main.js callApi response", response);

    let listItem = document.createElement("li");
    listItem.classList = "historicItem";

    let newQuestion = document.createElement("p");
    newQuestion.classList = "newQuestion";
    newQuestion.innerHTML = userInput.value;
    userInput.value = "";

    let newAnswer = document.createElement("p");
    newAnswer.classList = "newAnswer";
    newAnswer.innerHTML = response.choices[0].message.content;

    listItem.appendChild(newQuestion);
    listItem.appendChild(newAnswer);
    questionList.prepend(listItem);
    history.style.display = "flex"
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form").addEventListener("submit", formSubmit);
});

//placing each historic question and answer into an individual container //

function addToList(content) {
  const questionList = document.querySelector('.history .questionList');
  const listItem = document.createElement('li');
  const div = document.createElement('div');
  div.textContent = content;
  listItem.appendChild(div);
  questionList.appendChild(listItem);
}
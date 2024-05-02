import { callApi } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");

async function formSubmit() {
  console.log("stringSubmitted");

  const userInput = document.getElementById("input").value;
  question.innerHTML = userInput;

  callApi(userInput)
  .then(response => {
      answer.innerHTML = response.choices[0].message.content;
  });
  userInput = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});
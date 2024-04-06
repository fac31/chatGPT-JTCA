import { fetchKey } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");
function formSubmit() {
  const userInput = document.getElementById("input").value;
  question.innerHTML = userInput;
  answer.innerHTML = fetchKey(userInput);
  //console.log("stringSubmitted");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});

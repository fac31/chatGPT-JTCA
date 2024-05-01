import { fetchKey, getAIReply } from "./api-requests.js";

const answer = document.getElementById("answer");

const question = document.getElementById("question");

async function formSubmit() {
  const userInput = document.getElementById("input").value;
  fetchKey(userInput);
  question.innerHTML = userInput;
  console.log(getAIReply());
  answer.innerHTML = getAIReply().choices[0].message.content;
  //console.log("stringSubmitted");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});

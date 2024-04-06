import { fetchKey } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");
async function formSubmit() {
  const userInput = document.getElementById("input").value;
  const aiReply = await fetchKey(userInput);
  console.log(aiReply);
  question.innerHTML = userInput;
  answer.innerHTML = aiReply;

  //console.log("stringSubmitted");
}

function displayAiMessage(data){
  const answer = document.getElementById("answer");
  const question = document.getElementById("question");
  if(data){

  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});

import { fetchKey,getAIReply } from "./api-requests.js";
const answer = document.getElementById("answer");
const question = document.getElementById("question");
async function formSubmit() {
  const userInput = document.getElementById("input").value;
  fetchKey(userInput);
  console.log(getAIReply());
  question.innerHTML = userInput;
  answer.innerHTML = getAIReply().choices[0].message.content;

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

function formSubmit() {
  const userInput = document.getElementById("input");
  console.log("stringSubmitted");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});

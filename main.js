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

//************ testing library ***************//

/* This is the most simple JavaScript test. I am going to create a command line function so that we can use it. 
It calls the command function of Ping and then checks that the result is what you expect (Pong).*/

function equal(pong, actual) {
  if (actual === pong) {
    console.info(`Pass: Expected ${pong} and received ${actual}`);
  } else {
    console.error(`Fail: Expected ${pong} but received ${actual}`);
  }
}

client.once("ready", async () => {

  if (guild) { // Not sure on what the guild equivalent is for our bot - Would you be able to help me on this?
    await guild.commands.set([
      {
        name: "fortune-cookie",
        description: "This is your fortune",
        options: [
          {
            type: 3, // This corresponds to STRING type
            name: "text",
            description: "Your input text", // Description is required for each option
            required: false, // This field is not required
          },
        ],
      },
    ]);
    console.log("/commands have been registered");
  }
});

// generate interaction with command
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "fortune-cookie") {
    const fortune = await getFortuneCookie();
    await interaction.reply(fortune);
  }
});

//could also do a testing method to see if the AI's response is longer than the amount of characters it is allowed to reply back with?!

//**********


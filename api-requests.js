const API_URL = "https://api.openai.com/v1/chat/completions";

let API_KEY = "";

let aiReply = "";

export function fetchKey(userInput) {
  fetch("./config.json")
    .then((response) => response.json())
    .then((data) => {
      API_KEY = data.OPEN_AI_KEY;
    })
    .then(() => callApi(userInput))
    .catch((e) => console.log("error ", e));
}

export function callApi(userInput) {
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: userInput,
      },
    ],
    max_tokens: 500,
  };
  fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not ok: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      aiReply = data;
    })
    .catch((error) => console.log("Error making api request: ", error));
}

export function getAIReply() {
  return aiReply;
}

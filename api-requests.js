// const API_URL = "https://api.openai.com/v1/chat/completions";

export async function callApi(userInput) {

  console.log('api-requests.js inside function ', userInput)
  
  const response = await fetch("http://localhost:5000/apicall", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userInput: userInput }),
  })
    const data = await response.json();
    // console.log('data ', data.choices[0].message.content)
    return data;

}

const API_URL = "https://api.openai.com/v1/chat/completions";
let API_KEY = "";
fetchConfig();
function fetchConfig(){
    fetch("./config.json")
        .then((response) => response.json())
        .then((data) => API_KEY = data.OPEN_AI_KEY)
        .then(() => callApi())
        .catch((e) => console.log('error ', e));
}

function callApi(){
    const requestBody = {
        model: "gpt-3.5-turbo",
        prompt: "Enter your prompt here",
        max_tokens: 50
    }
    fetch(API_URL,{   
        method: "POST",
        
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify({requestBody})
    })
    .then((response) => console.log('This is the response: ',response.json()))
    .then((data) => console.log("This is the data: " ,data));
}
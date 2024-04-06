const API_URL = "https://api.openai.com/v1/chat/completions";
let API_KEY = "";
function fetchKey(){
    fetch("./config.json")
        .then((response) => response.json())
        .then((data) => API_KEY = data.OPEN_AI_KEY)
        .then(() => callApi())
        .catch((e) => console.log('error ', e));
}

function callApi(){
    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "Tell me about OpenAI"
            }
        ],
        max_tokens: 50
    }
    fetch(API_URL,{   
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    .then((response) => {
        if (!response.ok){
            throw new Error('Network response not ok: ' + response.statusText);
        }
        return response.json();
    })
    .catch((error) => console.log('Error making api request: ', error ));
}
fetchKey();
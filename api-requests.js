const API_URL = "https://api.openai.com/v1/chat/completions";
import {OPEN_AI_KEY} from "./config.js"

export function callApi(userInput){
    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: userInput
            }
        ],
        max_tokens: 500
    }
    return fetch(API_URL,{   
        method: "POST",
        headers: {
            Authorization: `Bearer ${OPEN_AI_KEY}`,
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
    .then((data) => { 
        console.log('AI reply: ', data)
        return data
        // aiReply = data
    })
    .catch((error) => console.log('Error making api request: ', error ));
}

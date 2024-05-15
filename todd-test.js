import { test, equal } from "/test-helpers.js";

//**************test that user input appears as a string

test("user input type appears as a string", () => {
    const userInput = document.querySelector('#input')

    equal(typeof userInput.value, 'string')
})

//***************test that submit button sends content to bot 

test("submit button sends content to bot", () => {
    const userInput = document.createElement('input');
    userInput.id = 'input';
    document.body.appendChild(userInput);

    // Variable to store the content sent to the bot
    let sentContent = ''; 

    // Fake send content to the bot
    function sendContentToBot(content) {
        sentContent = content;
    }

    // Attach the submit event listener
    userInput.addEventListener('submit', (event) => {
        const content = event.target.value;
        sendContentToBot(content); // Function to send content to bot
    });

    // Simulate typing in the input field
    userInput.value = 'Test input';

    // Trigger the submit event
    const submitEvent = new Event('submit');
    userInput.dispatchEvent(submitEvent);

    // Check if the content was sent to the bot as expected
    equal(sentContent, 'Test input', "Content should be sent to bot when submit button is pressed");
});

//*********test enter key sends content to bot

test("enter key sends content to bot", () => {
    const userInput = document.createElement('input');
    userInput.id = 'input';
    document.body.appendChild(userInput);

    // Variable to store the content sent to the bot
    let sentContent = ''; 

    // Fake send content to the bot
    function sendContentToBot(content) {
        sentContent = content;
    }

    // Attach the keypress event listener to detect Enter key press
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission behavior
            sendContentToBot(userInput.value); // Function to send content to bot
        }
    });

    // Simulate typing in the input field
    userInput.value = 'Test input';

    // Trigger the keypress event with Enter key
    const enterKeyEvent = new KeyboardEvent('keypress', { key: 'Enter' });
    userInput.dispatchEvent(enterKeyEvent);

    // Check if the content was sent to the bot as expected
    equal(sentContent, 'Test input', "Content should be sent to bot when Enter key is pressed");
});

// //************ testing library ***************//

/* Ways we can test our bot that I have thought of: 

- Check if response given is legible and useful (DONE)
- Check if we can get a sound reply which is directly related to what we say (Ping-Pong) (DONE)
- If the hardcode preventing it from giving out harmful or illegal information is working (DONE)
- Test the user interface
- See if the AI's response is longer than the amount of characters it is allowed to reply back with
- ChatGPT keys cannot give real-time info from Jan 2022 onwards
- Performance testing - How long does it take to reply (thinking time) */
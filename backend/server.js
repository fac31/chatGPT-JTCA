import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import { OPEN_AI_KEY } from './config.js';

const app = express();
const API_URL = "https://api.openai.com/v1/chat/completions";

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/apicall", async (req, res) => {
  const userInput = req.body.userInput;

  // console.log("server.js userInput", userInput);

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

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPEN_AI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Network response not ok: " + response.statusText);
    }

    const data = await response.json();
    // console.log("AI reply: ", data);
    res.json(data);
  } catch (error) {
    console.error("Error making API request: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 5000;
app.listen(port, () => console.log(`hello! express is listening on port ${port}`));
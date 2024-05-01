import { test, equal, notEqual, greaterThan } from "/test-helpers.js";

import { fetchKey, getAIReply, callApi } from "./api-requests.js";

test("Reply is responding with a string", () => {
  //fetchKey("Hello");
  //let aiReply = getAIReply();
  fetchKey("Hello");
  aiReply = getAIReply().choices[0].message.content;
  equal(aiReply, "Hello! How can I assist you today?");
});

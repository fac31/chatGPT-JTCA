import { test, equal, notEqual, greaterThan } from "/test-helpers.js";
import { fetchKey, getAIReply, callApi } from "./api-requests.js";
// Mock functions for fetch and its response to simulate API calls
// function setupFetchStub(data) {
//     return function fetchStub(_url, _options) {
//       return new Promise((resolve) => {
//         resolve({
//           ok: true,
//           json: () => Promise.resolve(data),
//           text: () => Promise.resolve(JSON.stringify(data)),
//           statusText: 'OK'
//         });
//       });
//     };
//   }

//   // Test for fetchKey function
//   test('fetchKey sets API_KEY', (done) => {
//     global.fetch = setupFetchStub({ OPEN_AI_KEY: 'fake_key_123' });

//     fetchKey('hello world'); // Assuming this would set the API_KEY

//     setTimeout(() => { // Timeout to wait for the promise chain to complete
//       equal(API_KEY, 'fake_key_123', 'API_KEY should be set from config.json');
//       done(); // callback to indicate the end of the test
//     }, 100);
//   });

//   // Test for callApi function
//   test('callApi sets aiReply based on API response', (done) => {
//     global.fetch = setupFetchStub({
//       replies: [{ message: 'Response from OpenAI' }]
//     });

//     API_KEY = 'valid_key'; // Setting a valid API key for the test
//     callApi('Test input'); // Calling API to set aiReply

//     setTimeout(() => { // Timeout to wait for the promise chain to complete
//       notEqual(aiReply, "", 'aiReply should be set with data from the API');
//       done(); // callback to indicate the end of the test
//     }, 100);
//   });

//   // Reset fetch after tests
//   test('Cleanup', () => {
//     global.fetch = originalFetch;
//   });

test("Reply is responding with a string", () => {
  fetchKey("Hello");
  let aiReply = getAIReply();
  fetchKey("Hello");
  aiReply = getAIReply().choices[0].message.content;
  equal(aiReply, "Hello! How can I assist you today?");
});

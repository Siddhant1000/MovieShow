
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_KEY } = require("./constant");
// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

async function run() {  // For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const result = await model.generateContent(searchQuery);
const response = result.response;
const text = response.text();
console.log(text);}run();
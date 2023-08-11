const { Configuration, OpenAIApi } = require("openai");
const { onCall } = require("firebase-functions/v2/https");

require("dotenv").config();
const apiKey = process.env.AI_API_KEY;
const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

exports.generateInfo = onCall(async (request) => {
  const recipePrompt = "I want you to act as a Nutrition Facts Generator. I will provide you with a recipe and your role is to generate nutrition facts for that recipe. You should use your knowledge of nutrition science, nutrition facts labels and other relevant information to generate nutritional information for the recipe. Add each nutrition fact to a new line. I want you to only reply with the nutrition fact in the form of an array of json objects (ex. [{ingredient: 'ingredient name' protein: 'protein value', carbs: 'carbs value', fat: 'fat value', calories:'calories value'  } ]). Do not provide any other information. My recipe is: ";
  const recipe = request.data.text;

  try {
    const options = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${recipePrompt}${recipe}` }],
      max_tokens: 200,
      temperature: 0,
      n: 1,
    };

    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${recipePrompt}${recipe}` }],
      max_tokens: 300,
      temperature: 0,
      n: 1,
      stop: "{}",
    });
    
    const response = result.data.choices[0].message.content;
    
    console.log(response)
   
    return response;

  } catch (error) {
    return error;
  }
});

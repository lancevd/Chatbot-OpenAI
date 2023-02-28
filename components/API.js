



const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "",
  temperature: 0.7,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});
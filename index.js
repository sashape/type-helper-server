// const fetch = require('node-fetch');

//     const prompt = 'Once upon a time';
//     const apiKey = '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';
//     const model = 'davinci';

//     fetch('https://api.openai.com/v1/engines/' + model + '/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + apiKey
//       },
//       body: JSON.stringify({
//         prompt: prompt,
//         max_tokens: 5
//       })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
const promptController = require('./controllers/promptController');
const express = require('express')
const app = express()
const port = 5000

// app.get('/prompt', (_req, res) => {
//   // Здесь можно добавить логику запроса к OpenAI
  
//   res.send('This is the /prompt route');
// });
app.get('/', (req, res) => {
  res.send('Main page');
});
app.get('/prompt', promptController.getPrompt);
// Роут для авторизации пользователя
app.post('/auth', (req, res) => {
  // Здесь можно добавить логику авторизации с помощью JWT и MongoDB
  res.send('This is the /auth route');
});

// Роут для регистрации пользователя
app.post('/signup', (req, res) => {
  // Здесь можно добавить логику регистрации с помощью JWT и MongoDB
  res.send('This is the /signup route');
});

app.listen(port, () => {
  console.log(`App on http://localhost:${port}`)
})
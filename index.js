import { handlePrompt } from "./controllers/promptController.mjs";
import bodyParser from 'body-parser';
import express from 'express';
const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Main page');
});
app.get('/prompt', handlePrompt);
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
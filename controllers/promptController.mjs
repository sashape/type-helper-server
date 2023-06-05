import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export async function handlePrompt(req, res) {
  res.send(
      { "ok": true, "message": req.body.prompt }
  );
  return;
  const apiKey = dotenv.config().parsed.TOKEN;
  const model = "gpt-3.5-turbo";
  const temperature = 0.7;
  const maxTokens = 50;
  const messages = [
    {"role": "user", "content": req.body.prompt }
  ]
  /*
  model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   */

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  };

  const data = {
    "model": model,
    "temperature": temperature,
    "messages": messages,
    "max_tokens": maxTokens
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
  const answer = await response.json();
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  // return answer
  // return {
  //   status: 200, /* Defaults to 200 */
  //   body: 'no ok'
  // }

  console.log(answer)
  res.send(
      { "ok": true, "message": answer.choices[0].message.content }
  );
}
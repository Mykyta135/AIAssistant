# AIAssistant

A small NestJS service for trying out assistant prompts against the OpenAI API: send a plain prompt, test an assistant persona with a conversation history, or tune a single prompt with explicit model parameters.

| Endpoint | What it does |
|---|---|
| `POST /chatgpt/prompt` | Send a simple prompt, get the text answer |
| `POST /chatgpt/test-assistant` | Test an assistant with a persona (system message) and conversation history |
| `POST /chatgpt/tune-prompt` | Run one prompt with detailed parameters to compare settings |

Request DTOs are validated with `class-validator` and documented in Swagger.

**Stack:** NestJS · OpenAI SDK · class-validator · Swagger · Docker

## Run

```bash
npm install
echo "OPENAI_API_KEY=sk-..." > .env
npm run start:dev      # Swagger UI at http://localhost:3000/api
```

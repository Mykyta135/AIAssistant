# AIAssistant

A small NestJS service for trying out assistant prompts against the OpenAI API: send a plain prompt, test an assistant persona with a conversation history, or tune a single prompt with explicit model parameters.

> **Archived (November 2026).** A local experiment, not maintained and not meant to be deployed: the endpoints have no auth or rate limit and accept any model name and token limit, so anyone who can reach the service spends the owner's OpenAI key.

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

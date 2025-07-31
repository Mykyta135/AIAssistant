import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { CreateChatCompletionRequest } from './create-chat-completion.dto';
import { TestAssistantRequestDto } from './test-assistant.dto';
import { TunePromptRequestDto } from './tune-prompt-request.dto';

@Injectable()
export class ChatgptService {
    private openai: OpenAI;

    constructor(private configService: ConfigService) {
        this.openai = new OpenAI({
            apiKey: this.configService.get<string>('OPENAI_API_KEY'),
        });
    }

    async createChatCompletion(dto: CreateChatCompletionRequest) {
        try {
            const response = await this.openai.chat.completions.create({
                messages: [{ role: 'user', content: dto.prompt }],
                model: 'gpt-3.5-turbo',
            });
            return response.choices[0].message.content;
        } catch (error) {
            throw new Error('Failed to get response from ChatGPT.');
        }
    }

    async testAssistant(dto: TestAssistantRequestDto) {
        const { systemMessage, conversationHistory, prompt } = dto;
        const messages: ChatCompletionMessageParam[] = [];

        if (systemMessage) {
            messages.push({ role: 'system', content: systemMessage });
        }
        if (conversationHistory) {
            messages.push(...conversationHistory);
        }
        messages.push({ role: 'user', content: prompt });

        try {
            return await this.openai.chat.completions.create({
                messages: messages,
                model: 'gpt-4o', // Default to a more advanced model for testing
            });
        } catch (error) {
            throw new Error('Failed to get response from ChatGPT.');
        }
    }

    async tunePrompt(dto: TunePromptRequestDto) {
        const {
            systemMessage,
            prompt,
            model,
            temperature,
            maxTokens,
            topP,
            frequencyPenalty,
            presencePenalty,
        } = dto;

        const messages: ChatCompletionMessageParam[] = [];
        if (systemMessage) {
            messages.push({ role: 'system', content: systemMessage });
        }
        messages.push({ role: 'user', content: prompt });

        try {
            return await this.openai.chat.completions.create({
                messages,
                model: model ?? 'gpt-3.5-turbo',
                temperature,
                max_tokens: maxTokens,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
            });
        } catch (error) {
            throw new Error('Failed to get response from ChatGPT.');
        }
    }
}
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatCompletionRequest {
    @ApiProperty({
        description: 'The prompt to send to ChatGPT.',
        example: 'What is the capital of France?',
    })
    prompt: string;
}
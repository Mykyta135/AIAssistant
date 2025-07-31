import { ApiProperty } from '@nestjs/swagger';

export class ChatMessageDto {
    @ApiProperty({
        description: 'The role of the message sender.',
        enum: ['user', 'assistant'],
        example: 'user',
    })
    role: 'user' | 'assistant';

    @ApiProperty({
        description: 'The content of the message.',
        example: 'What is a NestJS module?',
    })
    content: string;
}
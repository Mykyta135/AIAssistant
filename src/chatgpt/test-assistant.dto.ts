import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { ChatMessageDto } from './chat-message.dto';

export class TestAssistantRequestDto {
    @ApiProperty({
        description: "A system message to define the AI assistant’s persona and rules.",
        example: 'You are a helpful assistant who specializes in pirate lore.',
        required: false,
    })
    @IsOptional()
    @IsString()
    systemMessage?: string;

    @ApiProperty({
        description: 'The ongoing conversation history to provide context.',
        type: [ChatMessageDto],
        required: false,
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChatMessageDto)
    conversationHistory?: ChatMessageDto[];

    @ApiProperty({
        description: 'The latest user prompt to the assistant.',
        example: 'What are the three main rules of the Pirate Code?',
    })
    @IsString()
    prompt: string;
}
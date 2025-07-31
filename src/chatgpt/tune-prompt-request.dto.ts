import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';

export class TunePromptRequestDto {
    @ApiProperty({
        description: 'A system message to define the AI assistant’s persona and rules.',
        example: 'You are an expert copywriter who writes in a persuasive and punchy style.',
        required: false,
    })
    @IsOptional()
    @IsString()
    systemMessage?: string;

    @ApiProperty({
        description: 'The user prompt to be executed.',
        example: 'Write a product description for a new brand of coffee.',
    })
    @IsString()
    prompt: string;

    @ApiProperty({
        description: 'The specific model to use for the completion.',
        example: 'gpt-4o',
        required: false,
    })
    @IsOptional()
    @IsString()
    model?: string;

    @ApiProperty({
        description: 'Controls randomness. Lower values (e.g., 0.2) make the output more focused.',
        example: 0.8,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(2)
    temperature?: number;

    @ApiProperty({
        description: 'The maximum number of tokens to generate in the response.',
        example: 256,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    maxTokens?: number;

    @ApiProperty({
        description: 'Nucleus sampling. The model considers only tokens with top_p probability mass.',
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(1)
    topP?: number;

    @ApiProperty({
        description: 'Penalizes new tokens based on their existing frequency. Decreases repetition.',
        example: 0.5,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    @Min(-2)
    @Max(2)
    frequencyPenalty?: number;

    @ApiProperty({
        description: 'Penalizes new tokens based on whether they have appeared so far. Increases diversity.',
        example: 0.3,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    @Min(-2)
    @Max(2)
    presencePenalty?: number;
}
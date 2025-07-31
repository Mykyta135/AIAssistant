import { Controller, Post, Body } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateChatCompletionRequest } from './create-chat-completion.dto';
import { TestAssistantRequestDto } from './test-assistant.dto';
import { TunePromptRequestDto } from './tune-prompt-request.dto';

@ApiTags('chatgpt')
@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) { }

  @Post('prompt')
  @ApiOperation({ summary: 'Send a simple prompt to ChatGPT' })
  @ApiResponse({ status: 200, description: 'The text response from ChatGPT.' })
  create(@Body() createChatCompletionDto: CreateChatCompletionRequest) {
    return this.chatgptService.createChatCompletion(createChatCompletionDto);
  }

  @Post('test-assistant')
  @ApiOperation({
    summary: 'Test an AI assistant with persona and conversation history',
  })
  @ApiResponse({
    status: 200,
    description: 'The full response object from the OpenAI API.',
  })
  testAssistant(@Body() testAssistantDto: TestAssistantRequestDto) {
    return this.chatgptService.testAssistant(testAssistantDto);
  }

  @Post('tune-prompt')
  @ApiOperation({
    summary: 'Fine-tune and test a single prompt with detailed parameters',
  })
  @ApiResponse({
    status: 200,
    description: 'The full response object from the OpenAI API.',
  })
  tunePrompt(@Body() tunePromptDto: TunePromptRequestDto) {
    return this.chatgptService.tunePrompt(tunePromptDto);
  }
}
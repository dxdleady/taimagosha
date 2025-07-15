// Test script to verify LLaMA integration
import { llamaService } from './llamaService';

export async function testLlamaConnection() {
  console.log('Testing LLaMA connection...');
  console.log(
    'API Key:',
    import.meta.env.VITE_LLAMA_API_KEY ? 'Present' : 'Missing'
  );
  console.log('Model:', import.meta.env.VITE_LLAMA_ENDPOINT);

  try {
    const response = await llamaService.fetchLLMResponse('Hello, test message');
    console.log('LLaMA Response:', response);
    return response;
  } catch (error) {
    console.error('LLaMA Test Error:', error);
    throw error;
  }
}

// Test Context7 integration
export async function testContext7Integration() {
  console.log('Testing Context7 integration...');

  try {
    const context = {
      conversation_history: [],
      user_input: 'Hello TAIMAGOSHA',
      timestamp: new Date().toISOString(),
    };

    const response = await llamaService.fetchWithContext7(
      'Hello TAIMAGOSHA',
      context
    );
    console.log('Context7 Response:', response);
    return response;
  } catch (error) {
    console.error('Context7 Test Error:', error);
    throw error;
  }
}

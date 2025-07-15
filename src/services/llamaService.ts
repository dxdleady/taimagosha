// LLaMA Service with Context7 integration
import type { Character } from '../types/character';

export interface LLaMAResponse {
  text: string;
  error?: string;
}

export class LLaMAService {
  private endpoint: string;
  private apiKey?: string;

  constructor() {
    // Use environment variables for configuration
    this.endpoint = 'https://openrouter.ai/api/v1/chat/completions';
    this.apiKey = import.meta.env.VITE_LLAMA_API_KEY;
  }

  async fetchLLMResponse(prompt: string): Promise<string> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://taimagosha.vercel.app',
        'X-Title': 'TAIMAGOSHA',
      };

      // Add API key if available
      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model:
            import.meta.env.VITE_LLAMA_ENDPOINT ||
            'deepseek/deepseek-chat-v3-0324:free',
          messages: [
            {
              role: 'system',
              content:
                'You are TAIMAGOSHA, a helpful AI assistant with a duck-like personality. Be friendly, concise, and helpful.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData}`
        );
      }

      const result = await response.json();
      return result?.choices?.[0]?.message?.content || 'No response received.';
    } catch (error) {
      console.error('LLaMA API Error:', error);
      return 'LLaMA unavailable. Try again later.';
    }
  }

  // Context7 integration for MCP (Model Context Protocol) with Deep Memory
  async fetchWithContext7(prompt: string, context?: any): Promise<string> {
    try {
      const { deepMemoryEnabled, maxMemoryMessages } = context?.settings || {
        deepMemoryEnabled: true,
        maxMemoryMessages: 10,
      };
      const character: Character | null = context?.character || null;

      let systemMessage: string;

      if (character) {
        // Use character configuration
        if (deepMemoryEnabled) {
          systemMessage = `${character.prompts.system_deep_memory}

Context: ${JSON.stringify(context)}
Character: ${character.name}
Personality: ${character.character.personality}
Traits: ${character.character.traits.join(', ')}
Speaking Style: ${character.character.speaking_style}
Capabilities: ${character.capabilities.join(', ')}
MCP Enabled: ${character.mcp.enabled}
Memory Depth: ${maxMemoryMessages} messages
Expertise: ${character.character.expertise.join(', ')}`;
        } else {
          systemMessage = `${character.prompts.system_basic}

Character: ${character.name}
Personality: ${character.character.personality}
Traits: ${character.character.traits.join(', ')}
Speaking Style: ${character.character.speaking_style}
Capabilities: ${character.capabilities.join(', ')}
MCP Enabled: ${character.mcp.enabled}`;
        }
      } else {
        // Fallback to hardcoded TAIMAGOSHA
        systemMessage = deepMemoryEnabled
          ? `You are TAIMAGOSHA, a helpful AI assistant with a duck-like personality. Be friendly, concise, and helpful.

DEEP MEMORY ENABLED: Remember details from our conversation history. Build upon previous topics and maintain context.

Context: ${JSON.stringify(context)}
Character: TAIMAGOSHA
Personality: duck-like AI assistant
Capabilities: chat, help, conversation, deep memory retention
MCP Enabled: true
Memory Depth: ${maxMemoryMessages} messages`
          : `You are TAIMAGOSHA, a helpful AI assistant with a duck-like personality. Be friendly, concise, and helpful.

Character: TAIMAGOSHA
Personality: duck-like AI assistant
Capabilities: chat, help, conversation
MCP Enabled: true`;
      }

      const messages = [{ role: 'system', content: systemMessage }];

      // Add conversation history if available and deep memory is enabled
      if (context?.conversation_history && deepMemoryEnabled) {
        const historyToUse =
          context.conversation_history.slice(-maxMemoryMessages);
        historyToUse.forEach((msg: any) => {
          messages.push({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          });
        });
      } else if (context?.conversation_history && !deepMemoryEnabled) {
        // Only use last 2 messages if deep memory is disabled
        const recentHistory = context.conversation_history.slice(-2);
        recentHistory.forEach((msg: any) => {
          messages.push({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          });
        });
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: prompt,
      });

      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://taimagosha.vercel.app',
          'X-Title': 'TAIMAGOSHA',
          ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
        },
        body: JSON.stringify({
          model:
            import.meta.env.VITE_LLAMA_ENDPOINT ||
            'deepseek/deepseek-chat-v3-0324:free',
          messages,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `Context7 API error! status: ${response.status}, message: ${errorData}`
        );
      }

      const result = await response.json();
      return result?.choices?.[0]?.message?.content || 'No response received.';
    } catch (error) {
      console.error('Context7 Integration Error:', error);
      // Fallback to basic LLaMA call
      return this.fetchLLMResponse(prompt);
    }
  }
}

// Export singleton instance
export const llamaService = new LLaMAService();

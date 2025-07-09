export interface Character {
  id: string;
  name: string;
  displayName: string;
  description: string;
  version: string;
  character: {
    personality: string;
    traits: string[];
    speaking_style: string;
    expertise: string[];
  };
  prompts: {
    system_base: string;
    system_deep_memory: string;
    system_basic: string;
    greeting: string;
    fallback: string;
  };
  capabilities: string[];
  assets: {
    avatar: string;
    icon: string;
    heart: string;
  };
  ui: {
    primary_color: string;
    accent_color: string;
    theme: string;
  };
  settings: {
    default_memory_enabled: boolean;
    default_memory_length: number;
    max_memory_length: number;
    temperature: number;
    max_tokens: number;
  };
  mcp: {
    enabled: boolean;
    integrations: string[];
  };
}
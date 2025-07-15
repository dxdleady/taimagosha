/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LLAMA_API_URL: string;
  readonly VITE_LLAMA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface MCPItem {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

interface MCPState {
  mcpItems: MCPItem[];
  toggleMCP: (id: string) => void;
  initializeMCPs: () => void;
}

const defaultMCPs: MCPItem[] = [
  {
    id: 'playwright',
    name: 'Playwright',
    description: 'web scraping',
    enabled: true,
  },
  {
    id: 'context7',
    name: 'Context7',
    description: 'up-to-date API references and documentation',
    enabled: true,
  },
  {
    id: 'filesystem',
    name: 'FileSystem',
    description: 'local file operations',
    enabled: false,
  },
  {
    id: 'memory',
    name: 'Memory',
    description: 'persistent context storage',
    enabled: false,
  },
];

export const useMCPStore = create<MCPState>()(
  persist(
    (set, get) => ({
      mcpItems: [],
      toggleMCP: (id: string) =>
        set(state => ({
          mcpItems: state.mcpItems.map(item =>
            item.id === id ? { ...item, enabled: !item.enabled } : item
          ),
        })),
      initializeMCPs: () => {
        const current = get().mcpItems;
        if (current.length === 0) {
          set({ mcpItems: defaultMCPs });
        }
      },
    }),
    {
      name: 'mcp-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

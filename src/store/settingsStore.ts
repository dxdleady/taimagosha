import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SettingsState {
  deepMemoryEnabled: boolean;
  maxMemoryMessages: number;
  memoryContext: string;
  toggleDeepMemory: () => void;
  setMaxMemoryMessages: (max: number) => void;
  setMemoryContext: (context: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    set => ({
      deepMemoryEnabled: true,
      maxMemoryMessages: 10,
      memoryContext: 'conversation',
      toggleDeepMemory: () =>
        set(state => ({ deepMemoryEnabled: !state.deepMemoryEnabled })),
      setMaxMemoryMessages: (max: number) => set({ maxMemoryMessages: max }),
      setMemoryContext: (context: string) => set({ memoryContext: context }),
    }),
    {
      name: 'taimagosha-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

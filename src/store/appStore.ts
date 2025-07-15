import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Screen = 'main' | 'settings';

interface AppState {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      currentScreen: 'main',
      setCurrentScreen: (screen: Screen) => set({ currentScreen: screen }),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

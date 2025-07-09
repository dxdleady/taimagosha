import { create } from 'zustand'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: number
}

interface ChatState {
  messages: Message[]
  isLoading: boolean
  addMessage: (text: string, sender: 'user' | 'ai') => void
  setLoading: (loading: boolean) => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  addMessage: (text: string, sender: 'user' | 'ai') =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          text,
          sender,
          timestamp: Date.now(),
        },
      ],
    })),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}))
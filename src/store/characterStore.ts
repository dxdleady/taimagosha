import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Character } from '../types/character'

interface CharacterState {
  currentCharacter: Character | null
  availableCharacters: Character[]
  isLoading: boolean
  error: string | null
  loadCharacter: (characterId: string) => Promise<void>
  loadAvailableCharacters: () => Promise<void>
  setCurrentCharacter: (character: Character) => void
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set, get) => ({
      currentCharacter: null,
      availableCharacters: [],
      isLoading: false,
      error: null,

      loadCharacter: async (characterId: string) => {
        set({ isLoading: true, error: null })
        try {
          const response = await fetch(`/characters/${characterId}.json`)
          if (!response.ok) {
            throw new Error(`Failed to load character: ${characterId}`)
          }
          const character: Character = await response.json()
          set({ currentCharacter: character, isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to load character',
            isLoading: false 
          })
        }
      },

      loadAvailableCharacters: async () => {
        set({ isLoading: true, error: null })
        try {
          // For now, we'll hardcode the available characters
          // In the future, this could load from an index file
          const characterIds = ['duck', 'taimagosha', 'robo']
          const characters: Character[] = []
          
          for (const id of characterIds) {
            try {
              const response = await fetch(`/characters/${id}.json`)
              if (response.ok) {
                const character: Character = await response.json()
                characters.push(character)
              }
            } catch (error) {
              console.warn(`Failed to load character ${id}:`, error)
            }
          }
          
          set({ availableCharacters: characters, isLoading: false })
          
          // Load default character if none is set
          if (!get().currentCharacter && characters.length > 0) {
            set({ currentCharacter: characters[0] })
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to load characters',
            isLoading: false 
          })
        }
      },

      setCurrentCharacter: (character: Character) => {
        set({ currentCharacter: character })
      },
    }),
    {
      name: 'taimagosha-character',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        currentCharacter: state.currentCharacter 
      }),
    }
  )
)
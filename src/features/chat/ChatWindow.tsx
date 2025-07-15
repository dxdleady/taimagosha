import React, { useRef, useEffect } from 'react'
import { useChatStore } from '../../store/chatStore'
import { useSettingsStore } from '../../store/settingsStore'
import { useCharacterStore } from '../../store/characterStore'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { MemoryControls } from './MemoryControls'
import { llamaService } from '../../services/llamaService'

export const ChatWindow: React.FC = () => {
  const { messages, isLoading, addMessage, setLoading } = useChatStore()
  const { deepMemoryEnabled, maxMemoryMessages } = useSettingsStore()
  const { currentCharacter, loadCharacter } = useCharacterStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Load character on mount
    if (!currentCharacter) {
      loadCharacter('duck')
    }
  }, [currentCharacter, loadCharacter])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    addMessage(text, 'user')
    setLoading(true)

    try {
      // Use Context7 integration for LLaMA with deep memory settings and character config
      const context = {
        conversation_history: messages.slice(deepMemoryEnabled ? -maxMemoryMessages : -2),
        user_input: text,
        timestamp: new Date().toISOString(),
        character: currentCharacter,
        settings: {
          deepMemoryEnabled,
          maxMemoryMessages,
        }
      }
      
      const response = await llamaService.fetchWithContext7(text, context)
      addMessage(response, 'ai')
    } catch (error) {
      console.error('Chat error:', error)
      addMessage('LLaMA unavailable. Try again later.', 'ai')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <MemoryControls />
      <div className="flex flex-col h-96 bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-16">
            <p>{currentCharacter?.prompts.greeting || 'TALK TO ME...'}</p>
          </div>
        )}
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  )
}
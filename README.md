# TAIMAGOSHA

Мобильная PWA для создания персонализированного чатбота с интеграцией LLaMA и системой управления MCP (Model Context Protocol).

## Функциональные возможности

### 🤖 LLM-интеграция
- Прямое подключение к LLaMA API для генерации ответов
- Обработка ошибок и фоллбэки для API
- Система загрузки и индикации состояния

### 👤 Система персонажей
- Загрузка JSON-конфигураций персонажей через drag & drop
- Валидация схемы с полями: name, personality, goals, style
- Персистентное хранение настроек персонажей

### 🔧 MCP (Model Context Protocol)
- Система переключаемых модулей для расширения функциональности LLM
- Динамическое включение/выключение MCP компонентов
- Интеграция с Context7 и Playwright

### 💾 Управление состоянием
- Zustand для глобального состояния
- localStorage для персистентности данных
- Автоматическая синхронизация между экранами

### 📱 PWA функциональность
- Оффлайн работа
- Установка как нативное приложение
- Мобильная адаптация

## Технический стек

- **Frontend**: React + TypeScript + Tailwind CSS
- **Сборка**: Vite
- **Состояние**: Zustand
- **Валидация**: Zod
- **Тестирование**: Jest + Storybook + Chromatic
- **Деплой**: Vercel
- **Качество кода**: ESLint (Airbnb) + Prettier + Husky

## Структура проекта

```
src/
  features/
    chat/
      ChatWindow.tsx
      chatSlice.ts
    settings/
      SettingsScreen.tsx
      characterUpload/
        CharacterUpload.tsx
        characterSchema.ts
      mcpToggle/
        MCPToggleTable.tsx
        mcpConfig.ts
      socials/
        SocialsPlaceholder.tsx
    infoPills/
      InfoPill.tsx
      Tooltip.tsx
public/
  assets/
    # PNG/GIF изображения и иконки
```

## Основные экраны

### Главный экран (чат)
- Интерактивный чатбот с LLaMA
- Информационные пилюли (Character file, Active MCPs, Socials)
- Тултипы при нажатии на элементы
- Анимированные элементы интерфейса

### Экран настроек
- Drag & drop загрузка файлов персонажей
- Таблица переключателей MCP
- Заглушки социальных сетей (Telegram, X, WhatsApp)
- Синхронизация с главным экраном

## Интеграции

- **Context7** - для LLM/MCP интеграции и документации
- **Playwright** - через MCP для автоматизации
- **Социальные сети** - подготовка к интеграции с мессенджерами
- **Vercel** - автоматический деплой и хостинг
- **Storybook + Chromatic** - компонентная разработка

## Разработка

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

### Тестирование
```bash
npm run test
npm run lint
```

### Storybook
```bash
npm run storybook
```

## Деплой

Проект автоматически деплоится на Vercel при пуше в основную ветку.

## Лицензия

MIT
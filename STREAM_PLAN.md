# 📺 TAIMAGOSHA - План стрима

## 🖼️ Подготовка: Проверка ассетов (Figma референс)

- Перед каждым UI этапом проверяем Figma и загружаем нужные PNG/GIF/SVG в `/public/assets/`
- Подтверждаем, что имена файлов и визуал совпадают с дизайном
- **Промпт**: "Анализируй этот Figma дизайн и создай список всех нужных ассетов с их описанием"

## ⏱️ Общее время: ~2 часа

---

### 1. Настройка навигации (10 мин)

- [ ] **Промпт**: "Создай навигацию между main/settings экранами с heart и pills иконками"
- [ ] **Промпт**: "Добавь exit кнопку ❌ с анимацией закрытия"
- [ ] Демо навигации

### 2. Загрузка персонажей (25 мин)

- [ ] **Промпт**: "Создай drag & drop компонент для JSON файлов с валидацией"
- [ ] **Промпт**: "Настрой Zod схему для валидации персонажей"
- [ ] **Промпт**: "Добавь filename display и green tooltip при успехе"
- [ ] Демо загрузки

### 3. MCP таблица (25 мин)

- [ ] **Промпт**: "Создай таблицу MCP с toggle переключателями"
- [ ] **Промпт**: "Добавь persistence состояния в localStorage"
- [ ] **Промпт**: "Создай tooltip для каждого MCP переключателя"
- [ ] Демо переключателей

### 4. Социальные сети (10 мин)

- [ ] **Промпт**: "Создай социальные иконки (Telegram, X, WhatsApp) в disabled состоянии"
- [ ] **Промпт**: "Добавь 'coming soon' анимацию для соцсетей"
- [ ] Демо соцсетей

### 5. Синхронизация состояния (15 мин)

- [ ] **Промпт**: "Настрой синхронизацию между main и settings экранами через Zustand"
- [ ] **Промпт**: "Обнови main screen когда меняются настройки"
- [ ] Демо синхронизации

### 6. Проверка и тестирование (20 мин)

- [ ] **Промпт**: "Создай Storybook stories для всех компонентов"
- [ ] **Промпт**: "Настрой автоматические тесты для основных функций"
- [ ] **Промпт**: "Исправь все lint и prettier ошибки"
- [ ] **Промпт**: "Настрой Husky pre-commit хуки"

### 7. Деплой и завершение (15 мин)

- [ ] **Промпт**: "Настрой автоматический деплой на Vercel"
- [ ] Финальное демо приложения

---

## ✅ Чеклист

- [ ] Навигация
- [ ] Загрузка
- [ ] MCP
- [ ] Соцсети
- [ ] Синхронизация
- [ ] Тестирование
- [ ] Деплой

---

## 🛠️ Промпты для стрима

### Полезные промпты:

**Навигация:**

```
"Создай React navigation между main/settings с heart и pills иконками"
"Добавь exit кнопку с анимацией и навигацией назад"
```

**Загрузка персонажей:**

```
"Создай drag & drop для JSON с Zod валидацией персонажей"
"Добавь green tooltip при успешной загрузке файла"
```

**MCP интеграция:**

```
"Создай MCP toggle таблицу с persistence в localStorage"
"Добавь tooltip для каждого MCP переключателя"
```

**Управление состоянием:**

```
"Настрой Zustand синхронизацию между main и settings"
"Обнови main screen когда изменяются настройки"
```

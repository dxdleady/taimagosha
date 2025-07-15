# Step 2: Settings Screen Implementation (TAIMAGOSHA)

## 🖼️ Asset Checklist (Figma Reference)

- Review the Figma design for all required images/icons.
- Required assets (from Figma):
  - Social icons (Telegram, X, WhatsApp) as PNG/SVG
  - Any additional illustrations or icons visible on the settings screen
- Claude/code should prompt the user to upload each asset to `/public/assets/` **before** implementing the related UI.
- If any asset is missing, pause and request the user to provide it, matching the Figma visuals.
- Confirm asset filenames and locations with the user before using in code.

---

## 🏗️ Goal

Implement the TAIMAGOSHA settings screen with drag-and-drop character upload, MCP toggles, and social placeholders, using feature-based structure and on-demand asset support.

---

### ✅ Prerequisites

- [x] Main screen working
- [x] Zustand + localStorage setup
- [x] Image assets available in `/public/assets/`

---

### 🛠️ Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite
- Zustand (state)
- Vercel (deploy)
- PWA (manifest + service worker)

---

### 🗂️ Feature-Based Structure Example

```
src/
  features/
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
      settingsSlice.ts
      ...
```

---

### 🧩 Implementation Steps

1. **Navigation & State**
   - Use Zustand for global state: `uploadedCharacter`, `mcpToggles` (in `features/settings/settingsSlice.ts`).
   - Conditional render for main/settings screen.
   - Enter settings via heart or any pill; exit via ❌.
2. **Character Upload**
   - Use [`react-dropzone`](https://www.npmjs.com/package/react-dropzone) for drag-and-drop JSON upload (`characterUpload/CharacterUpload.tsx`).
     - Install: `npm install react-dropzone`
     - See usage example in the [npm docs](https://www.npmjs.com/package/react-dropzone)
   - Accept only `.json` files.
   - Validate using `zod` or `yup` (`characterUpload/characterSchema.ts`).
   - On valid upload: update state, localStorage, show green tooltip.
   - Example schema:
     ```json
     {
       "name": "string",
       "personality": "string",
       "goals": ["string"],
       "style": "string"
     }
     ```
   - Place sample file in `/public/assets/duck_character.json`.
3. **MCP Table**
   - MCPs config in `mcpToggle/mcpConfig.ts`.
   - Toggle switch per row (`mcpToggle/MCPToggleTable.tsx`).
   - For LLM/MCP integration, use Context7 to locate and reference all relevant documentation for each integration (e.g., Playwright, Context7 itself).
   - Update state, localStorage, show tooltip.
4. **Socials**
   - Render icons (Telegram, X, WhatsApp) (`socials/SocialsPlaceholder.tsx`).
   - Disabled, “coming soon” label.
5. **State Sync**
   - Main screen pills reflect settings (character, MCPs).
   - Use Zustand selectors/hooks.
6. **Testing & Stories**
   - Add Storybook stories for upload, toggle, pill.
   - Run Chromatic for designer review.
7. **Unit Tests & Lint**
   - Add Jest test for upload/toggle.
   - Run ESLint/Prettier.
   - Add Husky pre-commit: `npx husky-init && npm install`.

---

### ⚡ Tips

- Use Framer Motion for tooltips.
- Predefine MCPs for easier scaling.
- Add demo/test after each step in stream.
- Keep all assets in `/public/assets/` for easy upload/replacement.

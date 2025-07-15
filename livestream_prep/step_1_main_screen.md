# Step 1: Main Screen Implementation (TAIMAGOSHA)

## 🖼️ Asset Checklist (Figma Reference)

- Review the Figma design for all required images/animations.
- Required assets (from Figma):
  - `heart.gif` or `heart.png` (animated heart)
  - `duck.gif` or `duck.png` (animated duck)
  - Social icons (Telegram, X, WhatsApp) as PNG/SVG
- Claude/code should prompt the user to upload each asset to `/public/assets/` **before** implementing the related UI.
- If any asset is missing, pause and request the user to provide it, matching the Figma visuals.
- Confirm asset filenames and locations with the user before using in code.

---

## 🎯 Goal

Implement the TAIMAGOSHA main (chatbot) screen as a mobile-first PWA, using a feature-based structure, supporting on-demand PNG/GIF asset upload, and deploying to Vercel.

---

### ✅ Prerequisites

- [x] Figma prototype reviewed
- [x] Vercel deployment working
- [x] LLaMA endpoint tested (replace placeholder in code)
- [x] All image assets (PNG/GIF) to be uploaded on-demand and referenced from the `/public/assets/` directory

---

### 🛠️ Tech Stack & Official Docs

- **React**: [Quick Start](https://react.dev/learn) — Official React docs and intro.
- **TypeScript**: [Official Docs](https://www.typescriptlang.org/docs/) — Handbook, setup, and usage.
- **Tailwind CSS**: [Install with Vite](https://tailwindcss.com/docs/installation/using-vite) — Tailwind + Vite integration guide.
- **Vite**: [Getting Started](https://main.vitejs.dev/guide/) — Vite project scaffolding and config.
- **Zustand**: [Official Site](https://zustand-demo.pmnd.rs/) — State management docs.
- **Vercel**: [Deploy React to Vercel](https://vercel.com/guides/deploying-react-with-vercel) — Deployment guide for React apps.
- **PWA**: [Vite Plugin PWA](https://vite-plugin-pwa.netlify.app/) — PWA setup for Vite projects.
- **React Tooltip**: [Getting Started](https://react-tooltip.com/docs/getting-started) — Install and usage for tooltips.
- **Storybook**: [Install Storybook](https://storybook.js.org/docs/get-started/install) — Component-driven UI development.
  - [Naming & Hierarchy Best Practices](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy)
  - [Structuring Your Storybook](https://storybook.js.org/blog/structuring-your-storybook/)
- **Chromatic**: [Visual Review in Storybook](https://www.chromatic.com/blog/visual-review-in-storybook) — Visual testing and review workflow.
- **Jest**: [Getting Started](https://jestjs.io/docs/getting-started) — Unit testing setup and usage.
- **ESLint (Airbnb)**: [Airbnb Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) | [ESLint Getting Started](https://eslint.org/docs/latest/use/getting-started) — Linting and code style.
- **Husky**: [Official Setup](https://typicode.github.io/husky/#/) — Git hooks for linting/tests.
- **Best Practices (Context7)**: _(Add link or summary when Context7 docs are available)_ — Use Context7 for LLM/MCP integration and workflow best practices.

#### 📝 Notes

- Always check the official docs for onboarding, troubleshooting, and best practices.
- Each setup step in this file references the relevant documentation above.
- For Storybook, see [Naming & Hierarchy](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy) and [Structuring](https://storybook.js.org/blog/structuring-your-storybook/) for scalable component/story organization.
- For ESLint, follow [Getting Started](https://eslint.org/docs/latest/use/getting-started) to ensure code quality and consistency.
- For PWA, use the [Vite Plugin PWA](https://vite-plugin-pwa.netlify.app/) for easy setup.
- For React Tooltip, see [Getting Started](https://react-tooltip.com/docs/getting-started) for install and usage.
- For best practices and LLM/MCP integration, consult Context7 docs as they become available.

---

### 🗂️ Feature-Based Structure Example

```
src/
  features/
    chat/
      ChatWindow.tsx
      chatSlice.ts
      types.ts
      ...
    infoPills/
      InfoPill.tsx
      Tooltip.tsx
      ...
  assets/ (for imports, but user uploads to /public/assets/)
public/
  assets/ (PNG/GIF images)
```

---

### 🖼️ UI Elements

1. **Heart & Duck GIFs/PNGs** (static, loaded from `/public/assets/`)
2. **Info Pills** (Character file, Active MCPs, Socials)
   - Non-interactive, with tooltip on tap
3. **Chatbot Window**
   - User input, LLaMA response
   - Error fallback for API
   - Simple loading indicator

---

### 💬 LLaMA Integration

```ts
async function fetchLLMResponse(prompt: string): Promise<string> {
  const response = await fetch('https://api.llama.free/your-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) return 'LLaMA unavailable. Try again later.';
  const result = await response.json();
  return result?.text || 'No response.';
}
```

---

### 🧩 Implementation Steps

1. **Set up Zustand store** for chat messages (`features/chat/chatSlice.ts`).
2. **Create ChatWindow** with input, message list, loading, error (`features/chat/ChatWindow.tsx`).
3. **Add InfoPill** components for Character, MCP, Socials (`features/infoPills/InfoPill.tsx`).
4. **Add Tooltip** on tap for each InfoPill (`features/infoPills/Tooltip.tsx`).
5. **Display GIFs/PNGs** above chat, loaded from `/public/assets/`.
6. **Test on mobile** (responsive).
7. **Add smoke test** for chat flow.

---

### 🧪 Quick Test

- [ ] Run `npm run dev` and verify chat flow.
- [ ] Check GIFs/PNGs and tooltips on mobile.
- [ ] Deploy to Vercel and test PWA install.

---

### ⚡ Tips

- Use `react-tooltip` or a custom tooltip for mobile.
- Preload GIFs/PNGs for smooth animation.
- Use Tailwind for quick spacing/alignment.
- Add error boundary for LLaMA fetch.
- Keep all assets in `/public/assets/` for easy upload/replacement.

# Contributing to ACM Website

Welcome to the ACM VIT Bhopal tech team! We are building a high-end, neo-brutalist website for our chapter. Since we are moving fast to hit our deployment deadline, it is critical that everyone follows these standard practices.

## 1. Neo-Brutalist Design System
Do **not** use arbitrary tailwind shadows or borders. We have predefined CSS utility classes to maintain our signature brutalist look:
- **Borders:** Do not use `border-2` or `rounded-lg`. Use `.brutal-border` or explicitly `border-[3px] border-brand-black`. 
- **Shadows:** Do not use `shadow-lg`. Use `.brutal-shadow` which gives the solid, hard black drop shadow. Use `.brutal-shadow-hover` on interactive elements.
- **Colors:** Only use the brand colors defined in `globals.css` (e.g. `bg-brand-yellow`, `bg-brand-pink`, `bg-brand-cyan`, `bg-brand-purple`, `bg-brand-black`).

## 2. Shared UI Components
Before building a form or a card, check the `src/components/ui/` directory. 
- Need a button? Import `<Button />` from `@/components/ui/Button`. **Never** build a custom `<button>` tag.
- Need a text input? Import `<Input />` from `@/components/ui/Input`.
- Need a badge? Import `<Badge />` from `@/components/ui/Badge`.

If you need a new reusable component, ask the Tech Lead before building it so it can be added to the shared library.

## 3. Code Standards
- **Component Files:** Use `PascalCase.jsx` for all React component filenames (e.g., `HeroSection.jsx`, not `heroSection.jsx`).
- **One Component per File:** Keep files clean. Do not define 5 different components in a single file.
- **Client vs Server:** We are using Next.js App Router. If your component uses `framer-motion`, `useState`, or `useEffect`, you MUST put `"use client";` at the very top of the file.

## 4. Git Workflow (For Beginners)
Our active development branch is `develop`. The `main` branch is locked for production only.

**How to start your task:**
1. Switch to the develop branch: `git checkout develop`
2. Get the latest code: `git pull origin develop`
3. Create a new branch for your specific task: `git checkout -b feature/your-task-name`

**How to submit your task:**
1. Stage your changes: `git add .`
2. Commit with a clear message: `git commit -m "feat: built the events page"`
3. Push to your branch: `git push origin feature/your-task-name`
4. Go to GitHub and open a **Pull Request (PR)** from your branch into `develop`.
5. Fill out the Pull Request template provided.
6. The Tech Lead will review your code. Do not merge it yourself!

Let's ship this! 🚀

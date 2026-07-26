# Contributing to ACM Website

Welcome to the ACM VIT Bhopal tech team! We are building a high-end, neo-brutalist website for our chapter. Since we are moving fast to hit our deployment deadline, it is critical that everyone follows these standard practices.

## 1. Neo-Brutalist Design System
Do **not** use arbitrary tailwind shadows or borders. We have predefined CSS utility classes to maintain our signature brutalist look:
- **Borders:** Do not use `border-2` or `rounded-lg`. Use `.brutal-border` or explicitly `border-[3px] border-brand-black`. 
- **Shadows:** Do not use `shadow-lg`. Use `.brutal-shadow` which gives the solid, hard black drop shadow. Use `.brutal-shadow-hover` on interactive elements.
- **Colors:** Only use the brand colors defined in `tailwind.config` (e.g. `bg-brand-yellow`, `bg-brand-pink`, `bg-brand-cyan`, `bg-brand-purple`, `bg-brand-black`).

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

## 4. Git Workflow
- Do not push directly to `main` or `develop`.
- Create a new branch for your task (e.g., `feature/events-page`).
- When done, push your branch and open a Pull Request (PR) against `develop`.
- The Tech Lead will review your PR for design consistency before merging.

Let's ship this! 🚀

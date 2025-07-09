# Next.js 15 Template

<p align="left">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E=18.0.0-green?logo=node.js" alt="Node version" /></a>
  <a href="https://github.com/xirothedev/next-15-template/blob/main/LICENSE"><img src="https://img.shields.io/github/license/xirothedev/next-15-template?color=blue" alt="License" /></a>
  <a href="https://github.com/xirothedev/next-15-template/actions"><img src="https://github.com/xirothedev/next-15-template/actions/workflows/ci.yml/badge.svg" alt="Build Status" /></a>
  <a href="https://biomejs.dev/"><img src="https://img.shields.io/badge/code_style-biome-5B5B5B?logo=biome" alt="Biome" /></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/lint-eslint-4B32C3?logo=eslint" alt="ESLint" /></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/package%20manager-pnpm-F69220?logo=pnpm" alt="pnpm" /></a>
</p>

A modern, opinionated template for building scalable web applications with Next.js 15. This template provides a solid foundation with best practices, optimized configuration, and a clean project structure to accelerate your development workflow.

---

## 🚀 Project Overview

This repository serves as a starter template for Next.js 15 projects. It includes essential tooling, sensible defaults, and a modular architecture to help you quickly launch production-ready applications.

---

## ✨ Features

- Next.js 15 with App Router
- TypeScript support
- ESLint and Prettier for code quality and formatting
- pnpm for fast, efficient package management
- Environment variable management
- Modular, scalable folder structure
- Ready-to-use API routes
- Example components and utilities
- Built-in support for CSS Modules and/or Tailwind CSS (customize as needed)
- Optimized for performance and SEO

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) (package manager)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Tailwind CSS](https://tailwindcss.com/) *(optional, remove if not used)*
- [clerk](https://dashboard.clerk.com/apps)
- [drizzle](https://orm.drizzle.team/)
- [neon](https://neon.com/)
- [ngrok](https://ngrok.com/)
- [svix](https://www.npmjs.com/package/svix)

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone 
   cd next-15-template
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## directory structure

src/
├── 📂 app/                           # Contains the application's routes
│   ├── 📂 (auth)/                    # Route group for authentication pages (login, register)
│   ├── 📂 (home)/                    # Route group for the main pages after login
│   │   ├── 📂 protected/             # Directory for protected routes (requires login)
│   │   │   └── 📂 something/
│   │   │       └── 📄 page.tsx       # Route: /protected/something
│   │   ├── 📄 page.tsx               # Route: / (Main homepage)
│   │   └── 📄 layout.tsx             # Shared layout for pages within (home)
│   ├── 📄 page.tsx                   # Default page (could be another landing page)
│   ├──  favicon.ico
│   ├── globals.css
│   └── 📄 layout.tsx                 # Root Layout - The base layout for the entire application
│
├── 📂 components/                    # Contains common, reusable UI components
│
├── 📂 hooks/                         # Contains custom React hooks
│   └── 📄 use-mobile.ts              # Example: a hook to check if the device is mobile
│
├── 📂 lib/                           # Contains utility functions and helper libraries
│   └── 📄 utils.ts
├── 📂 modules/                       # Organizes code by feature
│   ├── 📂 auth/                      # Module for managing the authentication feature
│   ├── 📂 home/                      # Module for managing the home feature
│   │   ├── 📂 components/            # Components exclusively for the "home" module
│   │   │   ├── 📂 home-navbar/
│   │   │   └── 📂 home-sidebar/
│   │   └── 📂 layouts/
│   │       └── 📄 home-layout.tsx    # Layout specific to the "home" module
│   └── 📂 ui/                        # Can contain customized base UI elements
│       └── 📂 components/
│
└── 📄 middleware.ts                 # Processes requests before they reach a page
                                     # Often used for authentication checks, redirects

## Database setup

📦 <project root>
 ├ 📂 drizzle
 ├ 📂 src
 │   ├ 📂 db
 │   │  └ 📜 schema.ts
 │   └ 📜 index.ts
 ├ 📜 .env
 ├ 📜 drizzle.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json

##  Webhook sync

## TRPC setup
.
├── prisma  # <-- if prisma is added
│   └── [..]
├── src
│   ├── pages
│   │   ├── _app.tsx  # <-- add `withTRPC()`-HOC here
│   │   ├── api
│   │   │   └── trpc
│   │   │       └── [trpc].ts  # <-- tRPC HTTP handler
│   │   └── [..]
│   ├── server
│   │   ├── routers
│   │   │   ├── _app.ts  # <-- main app router
│   │   │   ├── post.ts  # <-- sub routers
│   │   │   └── [..]
│   │   ├── context.ts   # <-- create app context
│   │   └── trpc.ts      # <-- procedure helpers
│   └── utils
│       └── trpc.ts  # <-- your typesafe tRPC hooks
└── [..]
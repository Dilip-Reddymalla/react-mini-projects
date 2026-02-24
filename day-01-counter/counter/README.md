# Day 01: Counter App ⏱️

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a feature-rich Counter application built using **React** and **Vite**. It goes beyond the basic counter by including custom step values and comprehensive keyboard shortcut support for improved accessibility and speed.

## ✨ Features
- **Increment & Decrement**: Easily increase or decrease the counter value using on-screen buttons.
- **Custom Step Value**: Set a specific step size for your increments/decrements.
- **Zero-Floor Limit**: The counter value is constrained so it never drops below zero (`0`).
- **Keyboard Shortcuts**: Full application control without using the mouse:
  - `ArrowUp`: Increment counter
  - `ArrowDown`: Decrement counter
  - `R` or `r`: Reset counter to `0`
  - `S` or `s`: Increase step size by `1`
  - `A` or `a`: Decrease step size by `1` (minimum `1`)

## 🛠️ Tech Stack
- **React 19** (Hooks: `useState`, `useEffect`)
- **Vite** (Build Tool)
- **Vanilla CSS** (Styling)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd counter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🧠 Key Learnings
- Managing complex state operations using the `useState` hook.
- Handling side-effects and cleanup using `useEffect` for window event listeners (`keydown`).
- Implementing state constraints using mathematical functions like `Math.max()`.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

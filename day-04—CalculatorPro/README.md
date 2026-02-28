# Day 04: Calculator Pro 🧮

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a feature-rich, fully functional Calculator application built using **React** and **Vite**. It handles complex mathematical expressions safely using the `mathjs` library and includes advanced features like power states and full keyboard support for seamless use.

## ✨ Features
- **Standard Operations**: Perform addition, subtraction, multiplication, and division.
- **Decimal Support**: Safely handles floating-point numbers while preventing invalid inputs (like multiple decimals in one number).
- **Power States (ON/OFF)**: Includes a simulated power state. When switched OFF, the calculator is disabled until turned back ON.
- **Smart Input Parsing**: Prevents consecutive mathematical operators and handles edge cases gracefully.
- **Keyboard Shortcuts**: Full application control directly from your keyboard:
  - `0-9`, `+`, `-`, `*`, `/`, `.`: Standard input
  - `Enter`: Calculate result (`=`)
  - `Backspace`: Delete last character (`DEL`)
  - `Escape`: Power OFF
  - `o` or `O`: Power ON

## 🛠️ Tech Stack
- **React 19** (Hooks: `useState`, `useEffect`)
- **Vite** (Build Tool)
- **Vanilla CSS** (Styling)
- **Math.js** (for safe evaluation of mathematical expressions)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd day-04—CalculatorPro
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
- Integrating third-party libraries (`mathjs`) for safe expression evaluation instead of using `eval()`.
- Complex state management handling the calculator's input display and power toggle functionality.
- Implementing robust keyboard event listeners with `useEffect` to capture standard typing and special keys.
- Managing edge cases and parsing string inputs to prevent invalid mathematical equations before they are processed.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

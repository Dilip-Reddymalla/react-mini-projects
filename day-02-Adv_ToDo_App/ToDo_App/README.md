# Day 02: Advanced ToDo App 📝

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a feature-rich ToDo application built using **React** and **Vite**. It goes beyond a simple to-do list by including task filtering, editing capabilities, and local storage persistence so you never lose your tasks after a refresh.

## ✨ Features
- **Add Tasks**: Quickly add new tasks (supports `Enter` key shortcut).
- **Edit Tasks**: Update the title of existing tasks easily.
- **Delete Tasks**: Remove tasks you no longer need.
- **Toggle Status**: Mark tasks as completed or pending.
- **Filter Tasks**: View 'All', 'Completed', or 'Pending' tasks using a dropdown filter.
- **Local Storage Persistence**: Your tasks are automatically saved to the browser's local storage and restored on reload.

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
   cd ToDo_App
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
- Managing complex array states using the `useState` hook.
- Handling side-effects and persisting data using `useEffect` with browser `localStorage`.
- Utilizing `useEffect` for window event listeners (`keydown`) to capture the `Enter` key.
- Leveraging JavaScript array methods like `map()` and `filter()` to render and transform lists.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

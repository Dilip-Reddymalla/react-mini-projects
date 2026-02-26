# Day 03: Notes Manager 🗒️

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a feature-rich Notes Manager application built using **React** and **Vite**. It allows users to create, manage, and search through their personal notes, with all data persistently stored in the browser's local storage.

## ✨ Features
- **Add Notes**: Create new notes with a title and detailed content.
- **Edit Notes**: Easily update the title and content of existing notes via a dedicated modal.
- **Delete Notes**: Remove notes that are no longer needed.
- **Search Notes**: Quickly find specific notes by filtering through both titles and content.
- **Sort Notes**: Organize your view by sorting notes by 'Newest Updated' or 'Oldest Updated'.
- **Local Storage Persistence**: Your notes are automatically saved to the browser's local storage, ensuring data isn't lost on reload.

## ⚙️ Technical Features & Implementation
- **State Management**: Complex state handling via `useState` for multiple independent state variables:
  - `notes`: Primary state array holding all note objects.
  - `filteredNotes`, `usingSearch`: States dedicated to handling the search functionality without mutating the original list.
  - `inputTitle`, `inputContent`: Controlled component states for the input forms.
  - `isModalOpen`, `selectedNote`: States to independently manage the display and population of the edit modal.
  - `sortType`: State to toggle and manage sorting preference.
- **Side Effects & Storage**: The `useEffect` hook is deeply integrated with `localStorage` to synchronize the `notes` state every time it updates.
- **Dynamic Sorting & Filtering**: Advanced array manipulation using `filter()` for search terms and `sort()` combined with ISO date strings (`createdAt`, `updatedAt`) for chronological ordering.
- **Component Architecture**: Modular design splitting the UI into focused components:
  - `App.jsx`: Main container and state manager.
  - `NoteCard.jsx`: Reusable component for rendering individual note items.
  - `EditModal.jsx`: Isolated modal component for handling note updates without cluttering the main view.

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
   cd day-03-Notes_Manager
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
- Structuring multiple interconnected states in a functional React component.
- Implementing non-destructive filtering and sorting using derived state and array methods.
- Building reusable, isolated modal components for data editing.
- Deepening understanding of `localStorage` for robust client-side data persistence.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

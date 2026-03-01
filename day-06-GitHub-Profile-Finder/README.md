# Day 06: GitHub Profile Finder 🔍

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a sleek and responsive GitHub Profile Finder application built using **React** and **Vite**. It allows users to search for any GitHub user by their username and displays their detailed profile, including their bio, followers, following count, avatar, and a list of their repositories.

## ✨ Features
- **User Search**: Instantly search for GitHub users by their exact username.
- **Profile Overview**: Displays comprehensive user details including an avatar, name, bio, followers, and following count.
- **Repository List**: Retrieves and displays the user's repositories, complete with repository names, descriptions, star counts, and creation dates.
- **Direct GitHub Links**: Provides quick links to view both the user's profile and individual repositories directly on GitHub.
- **Error Handling**: Gracefully handles scenarios where a user is not found or when there is an API error.
- **Responsive Design**: Features a beautiful, mobile-friendly interface with modern styles and gradient effects.

## 🛠️ Tech Stack
- **React 19** (Hooks: `useState`, `useEffect`)
- **Vite** (Build Tool)
- **Vanilla CSS** (Styling)
- **GitHub REST API** (Data source)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd day-06-GitHub-Profile-Finder
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
- Integrating with external REST APIs (specifically the **GitHub API**) using the modern `async/await` syntax and fetch correctly.
- Managing multiple asynchronous operations utilizing `useEffect` based on controlled action states.
- Proper error handling and conditional rendering for an improved user experience (e.g., displaying loading states, or a "Not Found" message).
- Using modern UI elements like gradients and managing layout efficiently with Vanilla CSS Grids.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

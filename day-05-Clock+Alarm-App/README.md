# Day 05: Clock + Alarm App ⏰

This project is part of my **15 Days 15 Mini Projects Challenge** 🚀. 

## 🌟 About The Project
This is a feature-rich Clock and Alarm application built using **React** and **Vite**. It displays the current real-time clock and date, and allows users to set, manage, and trigger multiple alarms with audio notifications using the native Web Audio API.

## ✨ Features
- **Real-Time Clock**: Displays the current time and date, updating accurately every second.
- **Set Multiple Alarms**: Add as many custom alarms as you need.
- **Alarm Management**: Toggle individual alarms ON or OFF, or delete them entirely.
- **Audio Notifications**: Plays a synthesized sound using the browser's native Web Audio API (`AudioContext` and `OscillatorNode`) when an alarm rings.
- **Visual alerts**: Displays a popup notification to easily stop a ringing alarm.
- **Smart Time Formatting**: Converts standard 24-hour input times into a user-friendly 12-hour AM/PM format for the display list.

## 🛠️ Tech Stack
- **React 19** (Hooks: `useState`, `useEffect`, `useRef`)
- **Vite** (Build Tool)
- **Vanilla CSS** (Styling)
- **Web Audio API** (for generating alarm sounds)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd day-05-Clock+Alarm-App
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
- Integrating the native **Web Audio API** to generate, control, and stop sound frequencies without needing external audio files.
- Managing intervals and persistent references using `useEffect` and `useRef` to prevent memory leaks and keep the application in sync.
- Handling array states with complex objects (alarms array) and performing targeted updates like toggling boolean flags based on IDs.
- Formatting native JavaScript Date objects and time strings for better user UI presentation.

---
*Created as part of a 15-day challenge to build 15 mini React projects.*

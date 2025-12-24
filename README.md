# 🎮 Hangman Game (Word Guessing)

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, responsive, and interactive Hangman-style word guessing game. Built with **React**, **Vite**, and **Tailwind CSS**, featuring a polished UI with smooth animations, multiple categories, and a responsive design that works on mobile, tablet, and desktop.

## ✨ Features

- **Multiple Categories:** Choose from various categories (e.g., Countries, Movies) to guess words.
- **Responsive Design:** Fully optimized layouts for Mobile, Tablet, and Desktop screens.
- **Interactive Keyboard:** Virtual on-screen keyboard with state tracking (disabled keys for used letters).
- **Game States:** Clear visual feedback for "Win", "Lose", and "Paused" states with modal overlays.
- **Progress Tracking:** Visual health bar and lives counter.
- **Smooth Animations:** CSS transitions for keyboard interactions and letter reveals.

## 📸 Screenshots

|        Desktop        |        Tablet        |        Mobile        |
| :-------------------: | :------------------: | :------------------: |
| ./desktop-preview.png | ./tablet-preview.png | ./mobile-preview.png |

## 🚀 Technologies Used

- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## 🛠️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📂 Project Structure

```text
src/
├── assets/          # Images and icons
├── components/      # React Components
│   ├── Header.jsx       # Game header with health bar
│   ├── Keyboard.jsx     # On-screen keyboard
│   ├── NameDisplay.jsx  # The word display area
│   ├── MenuModal.jsx    # Popups for Win/Lose/Pause
│   └── InGame.jsx       # Main game logic controller
├── data/
│   └── data.json    # JSON file containing categories and words
├── App.jsx          # Main application entry point
└── main.jsx         # DOM rendering
```

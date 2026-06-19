# Personal Reading Notes Organizer

## Problem
Readers often struggle to keep track of key insights, quotes, and summaries from their various readings across books, articles, and online content. This leads to lost information and difficulty recalling specific details when needed for reflection or reference later.

## Solution
This website provides a dedicated space for users to input, categorize, and organize their reading notes, highlights, and summaries. All data is stored locally in the user's browser, enabling easy search and retrieval without requiring external accounts or internet connectivity.

## Pages
*   Home
*   Add Note
*   All Notes
*   Search Notes

## Technologies
*   Next.js 14 (App Router)
*   React.js
*   Client-side storage (localStorage)
*   CSS (no Tailwind, no CSS modules)

## Features
*   **Local Storage**: All notes are stored directly in your browser, ensuring privacy and offline access.
*   **Add Notes**: Easily input new notes with a title, content, and category.
*   **View All Notes**: Browse through all your saved notes in an organized grid.
*   **Search Notes**: Quickly find specific notes using keywords.
*   **Stunning UI**: Enjoy a modern, dark-themed interface with vibrant gradient accents and glassmorphic elements.

## Setup and Run
1.  **Clone the repository (or create the files manually as provided):**
    ```bash
    git clone <repository-url>
    cd reading-notes-organizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```

5.  **Start the production server:**
    ```bash
    npm start
    # or
    yarn start
    ```

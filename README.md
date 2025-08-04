# Anime Project 🚀

This project is a React-based web application designed for anime enthusiasts. It allows users to browse popular anime, view detailed information about specific titles and characters, and manage a personal bookmark list. The application fetches data from the Jikan API, providing a dynamic and up-to-date experience.

## 🌟 Key Features

- **Browse Popular Anime:** Discover trending anime titles with ease.
- **Detailed Anime Information:** Access comprehensive details about each anime, including synopsis, genre, and more.
- **Character Information:** Explore detailed profiles of characters from your favorite anime.
- **Bookmark Management:** Save and manage your favorite anime titles in a personal bookmark list.
- **Responsive Design:** Enjoy a seamless experience on various devices.
- **Search Functionality:** Quickly find the anime you're looking for.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - React Router DOM
    - React Bootstrap
    - React Icons
- **Styling:**
    - CSS
    - Bootstrap
- **API Interaction:**
    - Jikan API (for anime data)
- **Utilities:**
    - `sweetalert2`
- **Build Tools:**
    - Create React App

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd my-app
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```
my-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── HomePage/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   ├── Middle/
│   │   ├── Middle.jsx
│   │   ├── Middle.css
│   ├── Carousel/
│   │   ├── Carousel.jsx
│   │   ├── Carousel.css
│   ├── TestNav/
│   │   ├── Test.jsx
│   │   ├── Test.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   ├── viewmore/
│   │   ├── viewmore3.jsx
│   │   ├── viewmore.css
│   │   ├── characters.jsx
│   │   ├── character.css
│   │   ├── characterinfo.jsx
│   │   ├── characterinfo.css
│   ├── Popular/
│   │   ├── Fullpopular.jsx
│   │   ├── Popular.jsx
│   ├── FrontPage/
│   │   ├── Front.jsx
│   │   ├── Front.css
│   ├── bookmark/
│   │   ├── bookmark.jsx
│   │   ├── bookmark.css
│   ├── img/
│   │   ├── ... (image assets)
├── package.json
├── README.md
```


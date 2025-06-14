# Chef Claude: AI Recipe Generator

Chef Claude is a modern web application that helps you discover delicious recipes based on the ingredients you already have at home. Simply input your available ingredients, and Chef Claude, powered by Google's Gemini AI, will suggest a creative recipe you can make!

## Features

*   **Ingredient Input**: Easily add ingredients you have on hand.
*   **AI-Powered Recipe Generation**: Get unique recipe suggestions tailored to your ingredients using the Gemini API.
*   **Loading and Error Handling**: Provides clear feedback during recipe generation, including loading indicators and error messages.
*   **Markdown Recipe Display**: Recipes are rendered beautifully using Markdown for easy readability.
*   **Responsive Design**: A clean and intuitive user interface.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool for modern web projects.
*   **Google Gemini API**: For generating creative recipe suggestions.
*   **react-markdown**: A React component to render Markdown.
*   **CSS**: For styling the application.

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn
*   A Google Cloud Project with the Gemini API enabled and an API Key.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd react-app
    ```
    *(Note: Replace `[YOUR_REPOSITORY_URL]` with the actual URL of your repository if you are hosting it on GitHub or similar platforms.)*

2.  **Install NPM packages:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up your Gemini API Key:**
    Create a `.env` file in the root of the project (`react-app/`) and add your Gemini API key:
    ```
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    *(Replace `YOUR_GEMINI_API_KEY` with your actual API key obtained from Google Cloud.)*

## Usage

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).
3.  Enter ingredients into the input field and click "+ Add Ingredients".
4.  Once you have at least three ingredients, click "Get a recipe" to generate a recipe.
5.  View your AI-generated recipe!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Vijay Krishna - vijay74684@gmail.com

Project Link: [https://github.com/vjaykrsna/vjs-chef]

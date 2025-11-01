GreenLedger 

GreenLedger is a blockchain-powered platform to record and verify environmental actions, such as tree planting, waste reduction, and clean energy support.

 Features
- Record environmental actions with proof.
- Use Hedera blockchain for transparency.
- View and verify recorded actions.

 How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:3000`.

Deployment

 GreenLedger Deployment Guide (For Judges)

The GreenLedger project is an eco-focused web application designed to promote sustainability, carbon tracking, and green innovation through technology.
This section explains how judges or developers can set up, run, and deploy the project step-by-step.


 1. System Requirements

Before you begin deployment, make sure the following tools are installed on your computer:

Node.js (version 16 or higher) — to run JavaScript and React code

npm (Node Package Manager) or yarn — to install dependencies

Git — to clone the repository

Visual Studio Code (or any text editor)

A modern browser (Chrome, Edge, or Firefox)

For cloud deployment:

Vercel, Netlify, or GitHub Pages account

GitHub account for repository access


 2. Cloning the Repository

To access the project source code, open your terminal and run:

git clone https://github.com/Fillo001/Greenledger-.git

Then navigate into the project folder:

cd Greenledger-

This command will copy all files from GitHub to your local machine.

 3. Installing Dependencies

Once inside the folder, install all the required libraries and frameworks used by the GreenLedger project:

npm install

> This automatically installs every dependency listed in the package.json file, including React, TailwindCSS, or any other supporting libraries.

 4. Running the Project Locally

To run the application on your local computer, execute:

npm start

This command starts the development server.
Once started, open your browser and go to:

http://localhost:3000

You’ll now see the GreenLedger dashboard or homepage displaying all the sustainability tracking features.

 5. Project Structure Overview

Here’s a simplified overview of the GreenLedger folder structure to help judges understand how the project is organized:

Greenledger-/
│
├── public/               # Static files and main index.html
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/             # Main pages (Home, Dashboard, Reports, etc.)
│   ├── assets/            # Images, icons, and graphics
│   ├── styles/            # CSS or Tailwind configuration
│   ├── App.js             # Main app logic
│   └── index.js           # Entry point for React
│
├── package.json           # Dependencies and scripts
└── README.md              # Documentation

This modular structure makes the codebase easy to maintain and understand.


 6. Deploying the Project Online

To make the project accessible online for judges, it can be deployed easily using Vercel, Netlify, or GitHub Pages.


 Option A: Deploy to Vercel

1. Go to https://vercel.com


2. Log in with your GitHub account


3. Click “New Project” → “Import GitHub Repository”


4. Select the GreenLedger repository


5. Click Deploy


Vercel will automatically build and deploy the project, providing a public live link such as:

https://greenledger.vercel.app

This process usually takes under 2 minutes.

 Option B: Deploy to Netlify

1. Visit https://app.netlify.com

2. Click “Add New Site” → “Import from Git”

3. Connect your GitHub account and select GreenLedger

4. Set:

Build command: npm run build

Publish directory: build

5. Click Deploy Site


Netlify will automatically assign a unique live URL (e.g., https://greenledger.netlify.app).

 Option C: Deploy to GitHub Pages

To host GreenLedger directly on GitHub Pages:

1. Install GitHub Pages package:

npm install gh-pages --save-dev


2. In your package.json, add:

"homepage": "https://<your-username>.github.io/Greenledger-"


3. Add the following deployment scripts:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"


4. Run:

npm run deploy



Once done, your project will be live at:

https://<your-username>.github.io/Greenledger-


---

⚡ 7. Environment Configuration

If the project connects to APIs or uses external data, create a .env file in the root directory and define your environment variables:

REACT_APP_API_URL=https://api.greenledger.io
REACT_APP_API_KEY=your-api-key-here

Then restart your development server:

npm start

This ensures that sensitive keys are not exposed publicly.


---

🧪 8. Building for Production

Before deployment, it’s good practice to create an optimized production build:

npm run build

This will generate a folder named build/ containing compressed and optimized code, improving performance on deployment.

To test this build locally:

npx serve -s build

Then open:

http://localhost:5000

# Time Track Application

This project contains a React frontend and an Express backend.

## Setup

1. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
2. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

## Running the application

Start the backend API:
```bash
cd server
npm run dev
```

Start the React client in a separate terminal:
```bash
cd client
npm run dev
```

The React app will be available on `http://localhost:5173` and proxies API requests to the server running on port `3000`.


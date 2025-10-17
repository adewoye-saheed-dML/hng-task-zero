# HNG Backend Wizards — Stage 0 Task

This is my submission for the **HNG Internship Backend Wizards Stage 0 Task**.  
The project implements a simple RESTful API with a `/me` endpoint that returns my profile information along with a dynamic **cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

## Features
- GET `/me` endpoint
- Returns JSON response with:
  - `status`: always `"success"`
  - `user`: email, full name, and backend stack
  - `timestamp`: current UTC time in ISO 8601 format
  - `fact`: random cat fact from Cat Facts API
- Handles errors gracefully if the Cat Facts API is down
- Uses environment variables for configuration

---

## Tech Stack
- **Node.js**
- **Express.js**
- **Axios**
- **Dotenv** (for environment variables)

---

##  Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies 
```bash npm install

### 3. Configure environment variables
```bash EMAIL=your-email@example.com
NAME=Your Full Name

### 4. Run server locally
```bash npm start```

---

## Deployment
 
This project is deployed on Railway. You can access it live here
https://your-app-name.up.railway.app/me


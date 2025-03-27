# Gemini Chat App 💬✨

This is a simple full-stack web application that integrates **Google Gemini 2.0 Flash-001** with a React frontend and FastAPI backend. The app allows users to send natural language prompts and receive intelligent responses powered by Google's Gemini LLM.

---

## 📦 Tech Stack

- **Frontend**: React.js
- **Backend**: FastAPI (Python)
- **LLM API**: Google Gemini Developer API (Flash-001)
- **Styling**: CSS
- **Communication**: Axios (frontend) + REST APIs

---

## 🔧 Features

- Ask natural language questions via a friendly web UI
- Real-time responses using Gemini 2.0 Flash model
- Clean, responsive layout with styled buttons and text areas
- Cancel/Reset functionality
- Gemini API key secured using environment variables (`.env`)

---

## 🚀 Setup Instructions

### 🔹 Clone the Repo

```bash
git clone git@github.com:your-username/gemini-chat-app.git
cd gemini-chat-app
```

### Frontend Setup (React)

```bash
cd gemini-chat-ui
npm install
npm start
```

### Backend Setup (FastAPI)

```bash
cd ../gemini-backend
python3 -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt


 # Create a .env file in gemini-backend/

 GEMINI_API_KEY=your_google_gemini_api_key

 # run FastAPI Server

 python3 -m uvicorn main:app --reload
```







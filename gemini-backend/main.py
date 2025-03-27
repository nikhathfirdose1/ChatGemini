from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import os

app = FastAPI()

load_dotenv()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini API Configuration
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

class Prompt(BaseModel):
    prompt: str

@app.post("/query")
async def query_gemini(data: Prompt):
    model = genai.GenerativeModel('gemini-1.5-flash-latest')
    response = model.generate_content(data.prompt)
    return {"response": response.text}

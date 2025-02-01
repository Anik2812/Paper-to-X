from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import fitz
import asyncio
from google.generativeai import configure as configure_gemini, GenerativeModel
from gtts import gTTS
from pathlib import Path
import logging
from pydantic import BaseModel
import markdown2
import json

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Paper to X API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure APIs

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in environment variables")

configure_gemini(api_key=GEMINI_API_KEY)
model = GenerativeModel("gemini-pro")

# Create directories
UPLOAD_DIR = Path("uploads")
OUTPUT_DIR = Path("outputs")
PODCAST_DIR = OUTPUT_DIR / "podcast"
for dir_path in [UPLOAD_DIR, OUTPUT_DIR, PODCAST_DIR]:
    dir_path.mkdir(exist_ok=True, parents=True)

# Cache for storing processed content
content_cache = {}

class OutputRequest(BaseModel):
    file_id: str
    options: dict

def extract_text_from_pdf(file_path):
    try:
        with fitz.open(file_path) as pdf_file:
            text = "".join(page.get_text("text") + "\n" for page in pdf_file)
        return text.strip()
    except Exception as e:
        logger.error(f"PDF extraction error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to extract text from PDF")

async def generate_summary(text, type="general"):
    cache_key = f"{hash(text)}_{type}"
    if cache_key in content_cache:
        return content_cache[cache_key]
    try:
        prompt = f"Create an engaging, conversational podcast script from this text." if type == "podcast" else "Create a detailed summary." 
        response = model.generate_content(f"{prompt} {text}")
        summary = response.text
        if type != "podcast":
            summary = markdown2.markdown(summary)
        content_cache[cache_key] = summary
        return summary
    except Exception as e:
        logger.error(f"Summary generation error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to generate summary")

async def generate_audio(text, output_path):
    try:
        def generate():
            tts = gTTS(text=text, lang='en')
            tts.save(str(output_path))
        await asyncio.to_thread(generate)
        return str(output_path)
    except Exception as e:
        logger.error(f"Audio generation error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to generate audio")

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        file_path = UPLOAD_DIR / file.filename
        with open(file_path, "wb") as f:
            f.write(await file.read())
        text = extract_text_from_pdf(str(file_path))
        summary = await generate_summary(text)
        file_id = file.filename.split('.')[0]
        content_cache[file_id] = {"text": text, "summary": summary}
        return {"file_id": file_id}
    except Exception as e:
        logger.error(f"Upload error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate/{output_type}")
async def generate_output(output_type: str, request: OutputRequest):
    try:
        file_id = request.file_id
        if file_id not in content_cache:
            raise HTTPException(status_code=404, detail="File not found")
        text = content_cache[file_id]["text"]
        preview_content = None
        if output_type == "text":
            preview_content = content_cache[file_id]["summary"]
        elif output_type == "podcast":
            script = await generate_summary(text, "podcast")
            audio_path = PODCAST_DIR / f"{file_id}_podcast.mp3"
            await generate_audio(script, audio_path)
            preview_content = {"script": script, "audio_url": f"/outputs/podcast/{audio_path.name}"}
        elif output_type in ["graphical", "infographic"]:
            preview_content = "Visual content preview"
        return {"preview": preview_content}
    except Exception as e:
        logger.error(f"Generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Serve static files
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
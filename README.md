# Paper to X API

## 📌 Overview
Paper to X API is a powerful FastAPI-based tool designed to transform PDFs into multiple formats. It extracts text, generates summaries, and converts them into podcasts using text-to-speech (TTS).

## 🚀 Features
- ✅ Upload PDF files
- 📖 Extract and summarize text
- 🎙️ Generate podcast scripts
- 🔊 Convert text into an audio file
- 🌐 Serve files via API
- ⚙️ User Customizations: Duration, Voice Style, Multiple Outputs

## 🛠️ Tech Stack & Tools
- **LLMs/Models Used:** Mistral 7B, Vertex AI
- **Audio/Video/Graphics Tools:** gTTS, fitz
- **Other Libraries/APIs:** None

## ⚙️ Installation

### Prerequisites
Ensure you have:
- Python 3.8+
- Node.js & npm installed
- pip installed
- Virtual environment (recommended)

### Steps
1. Clone the repository:
   ```sh
   git clone [<repository_url>](https://github.com/Anik2812/Paper-to-X)
   ```
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # macOS/Linux
   venv\Scripts\activate  # Windows
   ```
3. Install backend dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Install frontend dependencies:
   ```sh
   cd frontend
   npm install
   ```
5. Set up the API key in `main.py`.
6. Run the backend:
   ```sh
   python ./backend/main.py
   ```
7. Run the frontend:
   ```sh
   cd frontend
   npm run dev
   ```

## 🛠️ API Endpoints

### Upload a PDF
- **POST** `/upload`
- **Description:** Uploads a PDF, extracts text, and provides a summary.
- **Response:** `{ "file_id": "unique_id", "summary": "generated_summary" }`

### Generate Output
- **POST** `/generate/{output_type}`
- **Description:** Generates text, podcast script, or infographic.
- **Response:** `{ "preview": {...} }`

## 🔧 Key Approach
- Reads the PDF, extracts all text, and uses **regular expressions** to isolate key sections like **Abstract, Introduction, and Conclusion**.

## 🔧 Troubleshooting
- **Missing Dependencies?** Run `pip install -r requirements.txt` for backend and `npm install` for frontend.
- **Port Conflict?** Use `--port 8001` or another port.
- **API Key Issues?** Ensure a valid key is set in `main.py`.


---
🔗 **Contributions Welcome!** Fork and improve this project. 🚀

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth

app = FastAPI(
    title="ReactLearn API",
    description="Backend API for ReactLearn",
    version="1.0.0"
)

# ✅ Allow frontend origins (React dev server + deployed app)
origins = [
    "http://localhost:5173",   # React dev server
    "http://127.0.0.1:5173",   # sometimes React runs here
    "https://demo-react-application-tau.vercel.app",  # your deployed frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # only allow these origins
    allow_credentials=True,
    allow_methods=["*"],          # allow all HTTP methods
    allow_headers=["*"],          # allow all headers
)

# ✅ Include authentication routes under /api
app.include_router(auth.router, prefix="/api")

@app.get("/")
def home():
    return {"message": "ReactLearn FastAPI backend is running"}

@app.get("/api/health")
def health_check():
    return {"status": "success", "message": "API is working"}

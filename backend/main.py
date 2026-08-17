from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models.user import User
from routes.auth import router as auth_router


# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="ReactLearn API",
    description="Backend API for ReactLearn",
    version="1.0.0"
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Authentication routes
app.include_router(auth_router, prefix="/api")


@app.get("/")
def home():
    return {
        "message": "ReactLearn FastAPI backend is running"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "success",
        "message": "API is working"
    }
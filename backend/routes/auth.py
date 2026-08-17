from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.user import User
from schemas.auth import SignupRequest, LoginRequest, UserResponse

from utils.security import hash_password, verify_password


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# ==========================
# SIGNUP
# ==========================

@router.post("/signup", response_model=UserResponse)
def signup(
    user_data: SignupRequest,
    db: Session = Depends(get_db)
):
    existing_user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = hash_password(user_data.password)

    new_user = User(
        name=user_data.name,
        email=user_data.email,
        password_hash=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ==========================
# LOGIN
# ==========================

@router.post("/login", response_model=UserResponse)
def login(
    user_data: LoginRequest,
    db: Session = Depends(get_db)
):
    # Find user by email
    user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    # User not found
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Verify password
    if not verify_password(
        user_data.password,
        user.password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Login successful
    return user
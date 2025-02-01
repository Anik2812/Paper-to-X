from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserDB(BaseModel):
    id: str
    email: EmailStr
    hashed_password: str
    created_at: datetime = datetime.now()

class FileDB(BaseModel):
    id: str
    user_id: str
    filename: str
    content: str
    status: str
    created_at: datetime = datetime.now()

class OutputDB(BaseModel):
    id: str
    file_id: str
    user_id: str
    output_type: str
    output_url: str
    options: dict
    created_at: datetime = datetime.now()

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
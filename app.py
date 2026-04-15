from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import BertTokenizer, BertForSequenceClassification
import torch
import torch.nn.functional as F
import auth

app = FastAPI()

# CORS (Important for React)        
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = BertForSequenceClassification.from_pretrained("results/fake_news_bert")
tokenizer = BertTokenizer.from_pretrained("results/fake_news_bert")

# Models
class News(BaseModel):
    text: str

class User(BaseModel):
    username: str
    password: str

# Create DB table
auth.create_user_table()

# Signup API
@app.post("/signup")
def signup(user: User):

    if auth.user_exists(user.username):
        return {"status": "User already exists"}

    auth.add_user(user.username, user.password)
    return {"status": "Account Created"}

# @app.post("/signup")
# def signup(user: User):
#     auth.add_user(user.username, user.password)
#     return {"status": "Account Created"}


# Login API
@app.post("/login")
def login(user: User):
    result = auth.login_user(user.username, user.password)

    if result:
        return {"status": "success"}
    else:
        return {"status": "fail"}

# Predict API
@app.post("/predict")
def predict(news: News):

    inputs = tokenizer(
        news.text,
        return_tensors="pt",
        truncation=True,
        padding=True
    )

    outputs = model(**inputs)
    probs = F.softmax(outputs.logits, dim=1)

    confidence = torch.max(probs).item()
    prediction = torch.argmax(probs).item()

    label = "REAL" if prediction == 1 else "FAKE"

    return {
        "prediction": label,
        "confidence": round(confidence * 100, 2)
    }
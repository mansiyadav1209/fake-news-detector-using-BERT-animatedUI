# 📰 Fake News Detection using BERT 



The system combines:

* Machine Learning (BERT)
* Interactive UI

This makes the project **accurate,and scalable**.

---


# Features

✅ Fake News Detection using BERT
✅ Global News Coverage
✅ Confidence Score Prediction
✅ User Authentication (Signup/Login)
✅ Professional UI 
✅ SQLite Database


---

# 🏗️ System Architecture

User Signup/Login
        ↓
   Animated UI(frontend)
        ↓
   FastAPI Backend
        ↓
BERT Model Prediction
        ↓
   Return Result
        ↓
   Display Output


---


# 🛠️ Technologies Used

* Python
* BERT (Transformers)
* SQLite
* HTML
* CSS
* JavaScript
* Pandas
* Scikit-learn
* FastAPI(Backend)
* React.js(Frontend)

---


⚙️ Installation & Setup (Step by Step)

# Step 1 — Clone Repository
git clone https://github.com/mansiyadav1209/fake-news-detector-using-BERT-animatedUI.git 
cd fake-news-detector-using-BERT-animatedUI

# Step 2 — Install Requirements
pip install -r requirements.txt

# Step 3 — Add Dataset

Download dataset:

Fake.csv
True.csv

Place both files in project folder:

project/
├── Fake.csv
├── True.csv

# Step 4 — Prepare Dataset

Run:

python prepare_data.py


This will create:

fake_news.csv

# Step 5 — Train Model

Run:

python train_model.py

This will create files inside*******:

fake_news_bert/

as:

fake_news_bert/
│── config.json
│── tokenizer_config.json
│── tokenizer.json
│── model.safetensors

Training time:

CPU → 2–3 hours
GPU → 10–20 minutes

# Step 6 — Run Backend
uvicorn app:app --reload


# Step 7 — Run UI (on new** terminal) :
cd frontend
npm install
npm start

Open browser:

http://localhost:3000


-----------------------------------------------------------------------------------------------





# How to run project----------->

# Step 1 — Run Backend
uvicorn app:app --reload


# Step 2 — Run UI
cd frontend
npm start



Open browser:

http://localhost:3000



------------------------------------------------------------------------------------------




# NOW check:


#  Example check news>
Global markets fall as oil prices rise amid Middle East tensions



#  Example Output>

```
Prediction: REAL

Confidence: 91%

```

---

# 📊 Dataset

The model was trained using Fake and Real News dataset:

* Political News
* Economic News
* Health News
* Science News
* World News

Dataset Sources:

* Kaggle Fake News Dataset
* Custom Dataset

---









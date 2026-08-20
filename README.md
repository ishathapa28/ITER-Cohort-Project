# 🧠 DSA Coach AI

> **An Agentic AI-powered platform designed to help students learn, practice, understand, and improve their Data Structures and Algorithms skills.**

## 👥 Team Members

* **Isha Thapa**
* **Jyotiraditya Mishra**
* **SnehaRani Mohakud**
* **Kuntal Shit**

---

## 📌 Project Overview

DSA Coach AI is an intelligent learning assistant that helps students practice Data Structures and Algorithms through personalized AI guidance. Instead of directly providing answers, the system analyzes the user's query, retrieves relevant DSA knowledge, and guides them toward the correct approach.

The project combines **RAG (Retrieval-Augmented Generation)**, **LangChain**, **LangGraph**, and multiple specialized AI agents to create an interactive DSA learning experience.

---

## 🔄 User Flow

1. User logs in or creates an account.
2. User selects a DSA topic, problem, or asks a question.
3. The query is processed by the AI orchestration system.
4. Relevant knowledge is retrieved from the DSA knowledge base using RAG.
5. The appropriate AI agent analyzes the request.
6. The AI provides hints, explanations, feedback, approaches, or code guidance.
7. The user can continue interacting until the concept is understood.

---

## 🤖 AI Agents

DSA Coach AI uses specialized agents for different learning tasks:

* **Coach Agent** — Guides students with hints and explanations.
* **Code Review Agent** — Analyzes user code and provides feedback.
* **Approach Agent** — Helps users understand problem-solving approaches.
* **MCQ Agent** — Generates and evaluates DSA-based questions.
* **RAG/Retrieval Agent** — Retrieves relevant information from the DSA knowledge base.

**LangGraph** is used to orchestrate and manage the workflow between these agents.

---

## ✨ Features

* 🔐 User authentication
* 💬 Interactive AI DSA Coach
* 📚 Topic-wise DSA learning
* 🔎 RAG-based knowledge retrieval
* 💡 Step-by-step hints and explanations
* 💻 Code analysis and feedback
* 🧠 MCQ practice
* 🎯 Personalized problem-solving guidance
* 📊 Structured DSA knowledge base
* 🔄 Multi-agent workflow using LangGraph

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Vite
* CSS / Modern UI Components

### Backend

* Python
* FastAPI
* Uvicorn

### AI & Agent Framework

* LangChain
* LangGraph
* LLM APIs

### RAG & Database

* PostgreSQL & Pgvector
* DSA Markdown Knowledge Base

### Authentication & Tools

* Firebase Authentication
* Git & GitHub

---

## 🏗️ Architecture


User
  ↓
React Frontend
  ↓
FastAPI Backend
  ↓
LangGraph Orchestrator
  ↓
Specialized AI Agents
  ↓
RAG Retrieval System
  ↓
Vector Database + DSA Knowledge Base
  ↓
AI Response


## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone <repository-url>
cd DSA_COACH_AGENTOPS
```

### 2. Set Up the Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
python -m uvicorn app.main:app --reload
```

### 3. Run the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The application will then be available through the local frontend development server.

---

## 🎯 Goal

The goal of **DSA Coach AI** is to make DSA learning more interactive and personalized by combining **RAG, Agentic AI, LangChain, and LangGraph**. The platform focuses on helping students develop strong problem-solving skills rather than simply giving them direct answers.

---

## 📜 License

This project is developed for our GenAI & Agentic AI Class by rptcohort.com.

**Built with ❤️ by Team AgentOPS**

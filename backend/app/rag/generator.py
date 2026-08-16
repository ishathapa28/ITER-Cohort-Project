from typing import List
import os

from langchain_core.documents import Document
from langchain_core.messages import HumanMessage, SystemMessage

from app.rag.llm import create_llm


# ============================================================
# CONFIGURATION
# ============================================================

# Development:
#   true  -> do NOT call Gemini
#   false -> use Gemini normally
#
# In production, set this to false.

USE_MOCK_LLM = os.getenv(
    "USE_MOCK_LLM",
    "true",
).lower() == "true"


# ============================================================
# SYSTEM PROMPT
# ============================================================

SYSTEM_PROMPT = """
You are DSA Coach, an AI tutor specialized in
Data Structures and Algorithms.

Your job is to help students understand DSA concepts
and solve coding problems.

Rules:

1. Use the provided knowledge context as the primary source.
2. Do not invent information that contradicts the context.
3. Explain concepts at a beginner/fresher placement level.
4. Prefer clear step-by-step explanations.
5. When explaining an algorithm, explain:
   - the idea
   - the steps
   - why it works
   - time complexity
   - space complexity
6. If code is requested, provide Java code.
7. Keep explanations practical and interview-oriented.
8. If the retrieved context is insufficient, say so clearly.
"""


# ============================================================
# BUILD CONTEXT
# ============================================================

def build_context(
    documents: List[Document],
) -> str:
    """
    Convert retrieved documents into LLM context.
    """

    context_parts = []

    for index, document in enumerate(
        documents,
        start=1,
    ):

        metadata = document.metadata

        context_parts.append(
            f"""
--- CONTEXT {index} ---

Problem ID:
{metadata.get("problem_id", "unknown")}

Title:
{metadata.get("title", "unknown")}

Topic:
{metadata.get("topic", "unknown")}

Difficulty:
{metadata.get("difficulty", "unknown")}

Pattern:
{metadata.get("pattern", "unknown")}

Section:
{metadata.get("section", "unknown")}

Content:
{document.page_content}
"""
        )

    return "\n".join(context_parts)


# ============================================================
# MOCK RESPONSE
# ============================================================

def generate_mock_answer(
    query: str,
    documents: List[Document],
) -> str:
    """
    Development-only response.

    This allows us to test the complete application
    without consuming Gemini API quota.
    """

    if not documents:
        return (
            "I could not find relevant information in "
            "the DSA knowledge base for this question."
        )

    first_document = documents[0]

    metadata = first_document.metadata

    title = metadata.get(
        "title",
        "this DSA problem",
    )

    topic = metadata.get(
        "topic",
        "DSA",
    )

    return f"""
[MOCK AI RESPONSE]

I received your question:

"{query}"

Based on the DSA knowledge retrieved for **{title}**:

- Topic: {topic}
- Retrieved knowledge: {len(documents)} relevant sections

The backend pipeline is working correctly.

The request successfully passed through:

Frontend
→ FastAPI
→ Orchestrator
→ Agent
→ RAG retrieval
→ Response generation

Gemini is currently disabled because development mock mode
is enabled.

When mock mode is disabled, Gemini will generate the actual
AI response using the retrieved DSA knowledge.
"""


# ============================================================
# GENERATE ANSWER
# ============================================================

def generate_answer(
    query: str,
    documents: List[Document],
) -> str:
    """
    Generate a DSA Coach answer using retrieved context.
    """

    if not documents:

        return (
            "I could not find relevant information in "
            "the DSA knowledge base for this question."
        )

    # --------------------------------------------------------
    # DEVELOPMENT MOCK MODE
    # --------------------------------------------------------

    if USE_MOCK_LLM:

        print(
            "LLM mock mode enabled - skipping Gemini request."
        )

        return generate_mock_answer(
            query=query,
            documents=documents,
        )

    # --------------------------------------------------------
    # REAL GEMINI MODE
    # --------------------------------------------------------

    context = build_context(documents)

    user_prompt = f"""
    Answer the student's question using the retrieved
    DSA knowledge.

    Student Question:
    {query}

    Retrieved Knowledge:
    {context}

    Instructions:
    - Answer the student's actual question directly.
    - Use the retrieved knowledge as the primary source.
    - Do not mention the retrieval system or internal context.
    - Explain the approach clearly.
    - Include time and space complexity when relevant.
    - If code is requested, provide Java code.
    - Keep the explanation suitable for a fresher preparing for placements.
    """

    llm = create_llm()

    response = llm.invoke(
        [
            SystemMessage(
                content=SYSTEM_PROMPT
            ),
            HumanMessage(
                content=user_prompt
            ),
        ]
    )

    return response.content
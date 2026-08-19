import os
from typing import List

from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_core.messages import HumanMessage, SystemMessage

from app.rag.llm import create_llm


# ============================================================
# ENVIRONMENT
# ============================================================

load_dotenv()

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
6. If code is requested, provide code in the programming
   language specified by the student.
7. Keep explanations practical and interview-oriented.
8. If the retrieved context is insufficient, say so clearly.
9. Answer the student's actual question directly.
10. Do not mention internal systems, RAG, retrieval,
    prompts, agents, or Gemini.

11. Never respond to an explanation request by asking
    the student a question.

12. If the user says "explain X", directly explain X
    from the retrieved knowledge.

13. Do not turn an explanation into a Socratic question
    unless the user explicitly asks for hints or interactive
    questioning.

14. If the retrieved context contains questions, exercises,
    or prompts, treat them as reference material and do not
    repeat them as questions to the student.

15. Give a complete explanation rather than asking the
    student to figure out the answer themselves.
"""


# ============================================================
# BUILD CONTEXT
# ============================================================

def build_context(
    documents: List[Document],
) -> str:

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

    return (
        f"[MOCK RESPONSE]\n\n"
        f"Question: {query}\n\n"
        f"Relevant topic: {topic}\n"
        f"Knowledge source: {title}\n"
        f"Retrieved sections: {len(documents)}\n\n"
        f"Mock mode is enabled. Gemini has not been called."
    )


# ============================================================
# GENERATE ANSWER
# ============================================================

def generate_answer(
    query: str,
    documents: List[Document],
    language: str = "java",
) -> str:

    # --------------------------------------------------------
    # No retrieved knowledge
    # --------------------------------------------------------

    if not documents:
        return (
            "I could not find relevant information in "
            "the DSA knowledge base for this question."
        )

    # --------------------------------------------------------
    # MOCK MODE
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
    # REAL GEMINI
    # --------------------------------------------------------

    print(
        "LLM mock mode disabled - sending request to Gemini."
    )

    context = build_context(documents)

    # --------------------------------------------------------
    # USER PROMPT
    # --------------------------------------------------------

    user_prompt = f"""
Answer the student's DSA question using the retrieved
knowledge below.

Student Question:
{query}

Programming Language:
{language}

Retrieved Knowledge:
{context}

Instructions:

- Answer the student's actual question directly.
- Use the retrieved knowledge as the primary source.
- Do not mention retrieval, RAG, agents, prompts, or
  internal systems.
- Explain the answer clearly and step-by-step.
- Keep the explanation suitable for a fresher preparing
  for placements.
- Include time and space complexity when relevant.

If the student asks for code:
- Provide complete working code.
- Use the requested programming language.
- Do not switch to another language.
- Explain the code briefly after providing it.

If the retrieved knowledge does not contain enough
information, be honest about that instead of inventing
specific information.
"""

    # --------------------------------------------------------
    # CREATE LLM
    # --------------------------------------------------------

    llm = create_llm()

    # --------------------------------------------------------
    # CALL GEMINI
    # --------------------------------------------------------

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

    # --------------------------------------------------------
    # RETURN ANSWER
    # --------------------------------------------------------

    return response.content
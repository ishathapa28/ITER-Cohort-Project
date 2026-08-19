from app.rag.generator import generate_answer


def run_hint_agent(
    query: str,
    mode: str = "hint",
    language: str = "java",
    code: str = "",
    problem: dict | None = None,
    conversation: list | None = None,
    retrieved_documents: list | None = None,
):
    """
    Hint Agent.

    Uses retrieved DSA knowledge to provide a hint
    without revealing the complete solution.
    """

    instruction = """
You are the Hint Agent inside a multi-agent DSA Coach.

Give the user a useful hint, not the complete solution.

Rules:

- Do NOT provide the complete solution.
- Do NOT provide the full code.
- Do NOT reveal the entire algorithm step-by-step.
- Identify the important observation or DSA pattern.
- Ask a guiding question when useful.
- Help the student discover the next step themselves.
- Keep the hint concise and useful.

If the user has provided code, use it to identify
what they should think about next.
"""

    enhanced_query = f"""
You are the Hint Agent inside a multi-agent DSA Coach.

Your instruction:

{instruction}

User question:
{query}

Programming language:
{language}

Problem context:
{problem if problem else "No problem context provided."}

User code:
{code if code else "No code provided."}

Previous conversation:
{conversation if conversation else "No previous conversation."}

Use the retrieved DSA knowledge as the primary source
for your answer.
"""

    documents = retrieved_documents or []

    return generate_answer(
        query=enhanced_query,
        documents=documents,
        
    )
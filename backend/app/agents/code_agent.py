from app.rag.service import ask_dsa_coach


def run_code_agent(
    query: str,
    mode: str = "review",
    language: str = "java",
    code: str = "",
    problem: dict | None = None,
    conversation: list | None = None,
):
    """
    Code Analysis Agent.

    Reviews the user's code using the DSA knowledge
    retrieved from the RAG pipeline.
    """

    instruction = """
Act like a technical interviewer reviewing the user's code.

Analyze:

1. Correctness
2. Logical mistakes
3. Code quality
4. Time complexity
5. Space complexity
6. Edge cases
7. Possible improvements

Be constructive.

Do not unnecessarily rewrite the entire solution.

If the code is missing, clearly tell the user
that code is required for a proper review.
"""

    enhanced_query = f"""
You are the code analysis agent inside a multi-agent DSA Coach.

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

    return ask_dsa_coach(
        query=enhanced_query,
        top_k=5,
    )
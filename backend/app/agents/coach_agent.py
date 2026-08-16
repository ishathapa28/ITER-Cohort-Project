from app.rag.service import ask_dsa_coach


def run_coach_agent(
    query: str,
    mode: str = "explain",
    code: str = "",
    problem: dict | None = None,
    conversation: list | None = None,
):
    """
    Main DSA Coach Agent.

    This agent receives the user's request,
    determines the coaching instruction,
    and uses the existing RAG pipeline.
    """

    if mode == "hint":

        instruction = """
Give the user a hint only.

Do NOT provide the complete solution.
Do NOT give the full code.

Guide the user toward discovering the solution themselves.
"""

    elif mode == "analyze":

        instruction = """
Analyze the user's approach or code.

Focus on:
- correctness
- logical mistakes
- edge cases
- time complexity
- space complexity

Do not unnecessarily rewrite the entire solution.
"""

    elif mode == "review":

        instruction = """
Act like a technical interviewer reviewing the user's solution.

Evaluate:
- correctness
- code quality
- time complexity
- space complexity
- edge cases
- possible improvements

Be constructive and interview-oriented.
"""

    elif mode == "explain":

        instruction = """
Explain the DSA concept clearly.

Use:
- simple language
- intuition
- step-by-step reasoning
- examples where useful
- time and space complexity
"""

    else:

        instruction = """
Answer the user's DSA question accurately and clearly.
"""


    enhanced_query = f"""
You are the {mode} agent inside a multi-agent DSA Coach.

Your instruction:
{instruction}

User question:
{query}

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
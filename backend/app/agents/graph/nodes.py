from app.agents.graph.state import CoachState

from app.agents.coach_agent import run_coach_agent
from app.agents.code_agent import run_code_agent
from app.agents.hint_agent import run_hint_agent
from app.agents.interview_agent import run_interview_agent
from app.agents.mcq_agent import run_mcq_agent
from app.agents.roadmap_agent import run_roadmap_agent

from app.rag.retriever import similarity_search


# ============================================================
# MEMORY NODE
# ============================================================

def memory_node(state: CoachState) -> CoachState:
    """
    Add the current user message to conversation memory.

    CoachState.conversation uses operator.add, so this
    message is appended to the existing conversation history.
    """

    message = state.get("message", "")

    if not message:
        return {}

    return {
        "conversation": [
            {
                "role": "user",
                "content": message,
            }
        ]
    }


# ============================================================
# ROUTER NODE
# ============================================================

def router_node(state: CoachState) -> CoachState:
    """
    Decide which specialized agent should handle the request.

    The selected agent is stored in agent_type.
    """

    message = state.get("message", "").lower()
    mode = state.get("mode", "").lower()

    # --------------------------------------------------------
    # Explicit mode-based routing
    # --------------------------------------------------------

    if mode == "hint":
        agent_type = "hint"

    elif mode in ["review", "analyze"]:
        agent_type = "code"

    elif mode in ["interview", "interview_prep"]:
        agent_type = "interview"

    elif mode in ["mcq", "quiz"]:
        agent_type = "mcq"

    elif mode in ["roadmap", "learning_path"]:
        agent_type = "roadmap"

    elif mode == "explain":
        agent_type = "coach"

    else:

        # ----------------------------------------------------
        # Code-related requests
        # ----------------------------------------------------

        code_keywords = [
            "my code",
            "my solution",
            "why does my code",
            "debug",
            "debugging",
            "bug",
            "error",
            "wrong answer",
            "runtime error",
            "compile error",
            "time complexity of my code",
            "space complexity of my code",
        ]

        # ----------------------------------------------------
        # Hint-related requests
        # ----------------------------------------------------

        hint_keywords = [
            "give me a hint",
            "give hint",
            "hint",
            "don't give me the answer",
            "without giving the answer",
            "help me think",
        ]

        # ----------------------------------------------------
        # Interview-related requests
        # ----------------------------------------------------

        interview_keywords = [
            "interview question",
            "interview questions",
            "mock interview",
            "interview prep",
            "interview preparation",
            "ask me an interview question",
            "technical interview",
        ]

        # ----------------------------------------------------
        # MCQ-related requests
        # ----------------------------------------------------

        mcq_keywords = [
            "mcq",
            "multiple choice",
            "multiple choice question",
            "quiz me",
            "quiz",
            "practice questions",
        ]

        # ----------------------------------------------------
        # Roadmap-related requests
        # ----------------------------------------------------

        roadmap_keywords = [
            "roadmap",
            "learning path",
            "what should i learn",
            "what should i study",
            "study plan",
            "learning plan",
            "dsa roadmap",
        ]

        # ----------------------------------------------------
        # Priority routing
        # ----------------------------------------------------

        if any(keyword in message for keyword in code_keywords):
            agent_type = "code"

        elif any(keyword in message for keyword in hint_keywords):
            agent_type = "hint"

        elif any(keyword in message for keyword in interview_keywords):
            agent_type = "interview"

        elif any(keyword in message for keyword in mcq_keywords):
            agent_type = "mcq"

        elif any(keyword in message for keyword in roadmap_keywords):
            agent_type = "roadmap"

        else:
            agent_type = "coach"

    return {
        "agent_type": agent_type,
    }


# ============================================================
# RAG RETRIEVAL NODE
# ============================================================

def retrieve_node(state: CoachState) -> CoachState:
    """
    Retrieve relevant DSA knowledge from PostgreSQL + pgvector.

    Retrieval uses:
    1. Current user message
    2. Recent conversation history
    3. Problem context, if available

    This allows follow-up questions such as:
        "What is its time complexity?"

    to be understood using the previous conversation.
    """

    message = state.get("message", "")

    problem = state.get("problem")

    conversation = state.get(
        "conversation",
        [],
    )

    # --------------------------------------------------------
    # Build conversation context
    # --------------------------------------------------------

    conversation_context = ""

    if conversation:

        recent_conversation = conversation[-6:]

        conversation_lines = []

        for item in recent_conversation:

            role = item.get(
                "role",
                "",
            )

            content = item.get(
                "content",
                "",
            )

            if content:

                conversation_lines.append(
                    f"{role}: {content}"
                )

        conversation_context = "\n".join(
            conversation_lines
        )

    # --------------------------------------------------------
    # Build retrieval query
    # --------------------------------------------------------

    retrieval_query = f"""
    Current user question:
    {message}
    """

    # Add conversation only when it exists
    if conversation_context:
        retrieval_query += f"""

    Recent conversation:
    {conversation_context}
    """

    # Add structured problem information
    if problem:

        title = problem.get("title", "")
        topic = problem.get("topic", "")
        pattern = problem.get("pattern", "")

        retrieval_query += f"""

    Problem context:
    Title: {title}
    Topic: {topic}
    Pattern: {pattern}
    """

    # Add retrieval hints based on request type
    mode = state.get("mode", "").lower()

    if mode == "code":
        retrieval_query += """

    Retrieval priority:
    - Find the exact problem or algorithm being discussed.
    - Prefer problem, solution, approach, key idea, and complexity sections.
    - Programming language is secondary metadata, not the main search topic.
    """

    elif mode == "explain":
        retrieval_query += """

    Retrieval priority:
    - Prefer conceptual explanation, key idea, algorithm steps,
    and complexity sections.
    """

    # --------------------------------------------------------
    # PostgreSQL + pgvector retrieval
    # --------------------------------------------------------

    documents = similarity_search(
        query=retrieval_query,
        top_k=5,
    )

    return {
        "retrieved_documents": documents,
    }


# ============================================================
# COACH NODE
# ============================================================

def coach_node(state: CoachState) -> CoachState:
    """
    Execute the Coach Agent.

    IMPORTANT:
    This node only generates an answer.

    It does NOT update conversation memory.

    This is important for self-correction because a failed
    answer should not be added to the conversation history
    before the retry.
    """

    result = run_coach_agent(
        query=state.get("message", ""),
        mode=state.get("mode", "explain"),
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "coach",
        "answer": answer,
    }


# ============================================================
# CODE NODE
# ============================================================

def code_node(state: CoachState) -> CoachState:
    """
    Execute the Code Analysis Agent.

    IMPORTANT:
    This node only generates an answer.

    It does NOT update conversation memory.
    """

    result = run_code_agent(
        query=state.get("message", ""),
        mode=state.get("mode", "review"),
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "code",
        "answer": answer,
    }


# ============================================================
# HINT NODE
# ============================================================

def hint_node(state: CoachState) -> CoachState:
    """
    Execute the Hint Agent.

    IMPORTANT:
    This node only generates an answer.

    It does NOT update conversation memory.
    """

    result = run_hint_agent(
        query=state.get("message", ""),
        mode="hint",
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "hint",
        "answer": answer,
    }

# ============================================================
# INTERVIEW NODE
# ============================================================

def interview_node(state: CoachState) -> CoachState:
    """
    Execute the Interview Preparation Agent.
    """

    result = run_interview_agent(
        query=state.get("message", ""),
        mode=state.get("mode", "interview"),
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "interview",
        "answer": answer,
    }


# ============================================================
# MCQ NODE
# ============================================================

def mcq_node(state: CoachState) -> CoachState:
    """
    Execute the MCQ Agent.
    """

    result = run_mcq_agent(
        query=state.get("message", ""),
        mode=state.get("mode", "mcq"),
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "mcq",
        "answer": answer,
    }


# ============================================================
# ROADMAP NODE
# ============================================================

def roadmap_node(state: CoachState) -> CoachState:
    """
    Execute the Roadmap Agent.
    """

    result = run_roadmap_agent(
        query=state.get("message", ""),
        mode=state.get("mode", "roadmap"),
        language=state.get("language", "java"),
        code=state.get("code", ""),
        problem=state.get("problem"),
        conversation=state.get("conversation", []),
        retrieved_documents=state.get(
            "retrieved_documents",
            [],
        ),
    )

    answer = (
        result["answer"]
        if isinstance(result, dict)
        else result
    )

    return {
        "agent_type": "roadmap",
        "answer": answer,
    }

# ============================================================
# EVALUATION NODE
# ============================================================

def evaluate_node(state: CoachState) -> CoachState:
    """
    Evaluate the generated response.

    Current version:
        Deterministic development evaluator.

    Future version:
        Gemini-based evaluator.

    The graph interface remains the same:

        evaluation = "good"
        evaluation = "bad"

    This allows Gemini to be introduced later without
    changing the LangGraph routing logic.
    """

    # --------------------------------------------------------
    # Current retry count
    # --------------------------------------------------------

    retry_count = state.get(
        "retry_count",
        0,
    )

    # --------------------------------------------------------
    # Testing override
    # --------------------------------------------------------

    override = state.get(
        "evaluation_override",
        "",
    )

    if override == "good":

        return {
            "evaluation": "good",
        }

    if override == "bad":

        return {
            "evaluation": "bad",
            "retry_count": retry_count + 1,
        }

    # --------------------------------------------------------
    # Get generated answer
    # --------------------------------------------------------

    answer = state.get(
        "answer",
        "",
    )

    # --------------------------------------------------------
    # Empty response = BAD
    # --------------------------------------------------------

    if not answer or not answer.strip():

        return {
            "evaluation": "bad",
            "retry_count": retry_count + 1,
        }

    # --------------------------------------------------------
    # Response is acceptable
    # --------------------------------------------------------

    return {
        "evaluation": "good",
    }


# ============================================================
# CONVERSATION MEMORY UPDATE
# ============================================================

def conversation_node(state: CoachState) -> CoachState:
    """
    Save the final user + assistant exchange into conversation
    memory.

    This node is executed ONLY after the response has been
    accepted or after maximum retries have been reached.

    Failed intermediate responses are NOT stored.
    """

    answer = state.get(
        "answer",
        "",
    )

    if not answer:
        return {}

    return {
        "conversation": [
            {
                "role": "assistant",
                "content": answer,
            }
        ]
    }
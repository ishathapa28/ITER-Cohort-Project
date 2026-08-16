from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.agents.orchestrator import run_orchestrator


router = APIRouter(
    prefix="/api/coach",
    tags=["Coach"],
)


class CoachRequest(BaseModel):
    message: str = Field(..., min_length=1)

    mode: str = "explain"

    language: str = "java"

    code: str = ""

    problem: dict | None = None

    conversation: list[dict] = []


class CoachSource(BaseModel):
    problem_id: str | None = None
    title: str | None = None
    section: str | None = None
    distance: float | None = None


class CoachResponse(BaseModel):
    query: str
    answer: str
    sources: list[CoachSource]


@router.post("/ask", response_model=CoachResponse)
def ask_coach(request: CoachRequest):

    try:

        result = run_orchestrator(
            message=request.message,
            mode=request.mode,
            language=request.language,
            code=request.code,
            problem=request.problem,
            conversation=request.conversation,
        )

        return result

    except Exception as error:

        print("Coach error:", error)

        raise HTTPException(
            status_code=500,
            detail="Failed to generate coach response.",
        )
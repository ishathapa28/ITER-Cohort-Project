import os

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI


load_dotenv()

MODEL_NAME = "gemini-2.5-flash"


def create_llm() -> ChatGoogleGenerativeAI:
    """
    Create the Gemini LLM used by the DSA Coach.
    """

    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        raise RuntimeError(
            "GEMINI_API_KEY is not configured in the .env file."
        )

    return ChatGoogleGenerativeAI(
        model=MODEL_NAME,
        api_key=api_key,
        temperature=0.2,
    )
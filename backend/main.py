from fastapi import FastAPI

from app.rag.api.routes.problems import router as problems_router


app = FastAPI(
    title="DSA Coach API",
    description="Backend API for the DSA Coach application",
    version="1.0.0",
)


app.include_router(problems_router)


@app.get("/")
def root():
    return {
        "message": "DSA Coach API is running"
    }
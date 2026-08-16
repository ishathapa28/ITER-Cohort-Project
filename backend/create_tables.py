from app.databse.database import engine, Base
from app.databse.models import KnowledgeChunk


print("Creating database tables...")

Base.metadata.create_all(bind=engine)

print("Database tables created successfully!")
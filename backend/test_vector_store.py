from app.rag.loader import load_dsa_documents
from app.rag.metadata import merge_duplicate_problems
from app.rag.splitter import split_documents
from app.rag.vector_store import create_chroma_collection
from app.rag.vector_store import store_documents


print("Loading documents...")

documents = load_dsa_documents()

print("Processing metadata...")

unique_documents = merge_duplicate_problems(
    documents
)

print("Splitting documents...")

chunks = split_documents(
    unique_documents
)

print(f"Unique problems: {len(unique_documents)}")
print(f"Total chunks: {len(chunks)}")

print("\nCreating ChromaDB collection...")

collection = store_documents(chunks)

print("\n========== CHROMA TEST ==========")

print(
    "Collection:",
    collection.name
)

print(
    "Stored chunks:",
    collection.count()
)
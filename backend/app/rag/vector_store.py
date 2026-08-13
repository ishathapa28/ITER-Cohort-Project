import chromadb
from chromadb.utils import embedding_functions


CHROMA_PATH = "chroma_db"
COLLECTION_NAME = "dsa_knowledge"

EMBEDDING_MODEL = (
    "sentence-transformers/all-MiniLM-L6-v2"
)


def create_chroma_collection():

    client = chromadb.PersistentClient(
        path=CHROMA_PATH
    )

    embedding_function = (
        embedding_functions.SentenceTransformerEmbeddingFunction(
            model_name=EMBEDDING_MODEL
        )
    )

    collection = client.get_or_create_collection(
        name=COLLECTION_NAME,
        embedding_function=embedding_function,
    )

    return collection


def store_documents(documents):

    collection = create_chroma_collection()

    ids = []
    texts = []
    metadatas = []

    for index, document in enumerate(documents):

        problem_id = document.metadata["problem_id"]

        section = document.metadata.get(
            "section",
            "unknown",
        )

        chunk_index = document.metadata.get(
            "chunk_index",
            index,
        )

        document_id = (
            f"{problem_id}"
            f"_{section}"
            f"_{chunk_index}"
        )

        ids.append(document_id)

        texts.append(
            document.page_content
        )

        metadata = {}

        for key, value in document.metadata.items():

            # Chroma metadata values must be
            # primitive types.
            if isinstance(value, list):
                metadata[key] = ",".join(
                    str(item)
                    for item in value
                )
            else:
                metadata[key] = str(value)

        metadatas.append(metadata)

    collection.add(
        ids=ids,
        documents=texts,
        metadatas=metadatas,
    )

    print(
        f"Stored {len(documents)} chunks "
        f"in ChromaDB."
    )

    return collection
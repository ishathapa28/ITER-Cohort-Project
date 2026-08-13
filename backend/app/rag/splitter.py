import re
from typing import List

from langchain_core.documents import Document


# Sections that we want to preserve as semantic units.
SECTION_PATTERN = re.compile(
    r"^##\s+(.+?)\s*$",
    re.MULTILINE,
)


def normalize_section_name(section_name: str) -> str:
    """
    Convert a Markdown section title into a normalized
    metadata-friendly name.

    Example:
        'Brute Force Approach'
        -> 'brute_force_approach'
    """

    section_name = section_name.strip().lower()

    section_name = re.sub(
        r"[^a-z0-9]+",
        "_",
        section_name,
    )

    return section_name.strip("_")


def split_markdown_sections(
    document: Document,
) -> List[Document]:
    """
    Split one DSA problem into semantic section-level chunks.

    Each ## section becomes a separate LangChain Document.

    Metadata from the original document is preserved.
    """

    content = document.page_content.strip()

    if not content:
        return []

    matches = list(SECTION_PATTERN.finditer(content))

    # If the document does not contain any ## sections,
    # keep the complete document as one chunk.
    if not matches:
        return [
            Document(
                page_content=content,
                metadata={
                    **document.metadata,
                    "section": "full_document",
                },
            )
        ]

    chunks: List[Document] = []

    # Content before the first ## section.
    introduction = content[:matches[0].start()].strip()

    if introduction:
        chunks.append(
            Document(
                page_content=introduction,
                metadata={
                    **document.metadata,
                    "section": "introduction",
                },
            )
        )

    # Extract every ## section.
    for index, match in enumerate(matches):

        section_title = match.group(1).strip()

        section_start = match.end()

        if index + 1 < len(matches):
            section_end = matches[index + 1].start()
        else:
            section_end = len(content)

        section_content = content[
            section_start:section_end
        ].strip()

        if not section_content:
            continue

        normalized_section = normalize_section_name(
            section_title
        )

        # Keep the section heading together with its content.
        chunk_text = (
            f"## {section_title}\n\n"
            f"{section_content}"
        )

        chunk_metadata = {
            **document.metadata,
            "section": normalized_section,
            "section_title": section_title,
            "chunk_index": index,
        }

        chunks.append(
            Document(
                page_content=chunk_text,
                metadata=chunk_metadata,
            )
        )

    return chunks


def split_documents(
    documents: List[Document],
) -> List[Document]:
    """
    Split all unique DSA documents into semantic chunks.
    """

    all_chunks: List[Document] = []

    for document in documents:

        chunks = split_markdown_sections(document)

        all_chunks.extend(chunks)

    return all_chunks
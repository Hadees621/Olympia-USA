export async function fetchBooks() {
  const response = await fetch("http://localhost:4000/api/v1/books");
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
}

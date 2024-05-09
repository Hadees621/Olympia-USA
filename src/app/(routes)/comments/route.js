import { comments } from "../hello/data";

export async function GET() {
  return new Response(JSON.stringify(comments));
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}

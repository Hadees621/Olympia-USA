import { comments } from "../hello/data";

export async function GET(request, { params }) {
  const comment = comments.find((comment) => comment.id === parseInt(params.id));
  return new Response(JSON.stringify(comment));
}

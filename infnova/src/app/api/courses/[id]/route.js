export async function GET(request, { params }) {
  const res = await fetch(
    `https://infnova-course-api.vercel.app/api/courses/${params.id}`
  );

  const data = await res.json();

  return Response.json(data);
}
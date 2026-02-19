export async function GET() {
  try {
    const res = await fetch(
      "https://infnova-course-api.vercel.app/api/courses"
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
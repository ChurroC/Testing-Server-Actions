import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { key, value } = await request.json();
  cookies().set(key, JSON.stringify(value));

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}

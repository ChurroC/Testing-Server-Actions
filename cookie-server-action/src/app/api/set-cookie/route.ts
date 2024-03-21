import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { value } = await req.json();

  cookies().set("theme", value);
  console.log("themeSet", value);

  return new Response(JSON.stringify({ apiNow: Date.now() }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

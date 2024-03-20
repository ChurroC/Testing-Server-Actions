// import { NextApiRequest, NextApiResponse } from "next";
// import { serialize } from "cookie";

// export default async function handler(
//   _req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   res
//     .status(200)
//     .setHeader(
//       "Set-Cookie",
//       serialize("apiCookie", "I was set via pages api", {
//         httpOnly: true,
//         sameSite: true,
//       }),
//     )
//     .json({ apiNow: Date.now() });
// }

import { cookies } from "next/headers";

export async function GET() {
  cookies().set("apiCookie", "I was set via pages api");
  return new Response(JSON.stringify({ apiNow: Date.now() }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

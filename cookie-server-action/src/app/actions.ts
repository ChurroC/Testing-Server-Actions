"use server";

import { cookies } from "next/headers";

export async function setCookie(value: string) {
  cookies().set("theme", value);
  console.log("themeSetThroughAction", value);
}

export async function cookielessSmash() {
  return Promise.resolve({
    actionNow: Date.now(),
  });
}

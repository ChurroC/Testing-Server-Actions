"use server";

import { cookies } from "next/headers";

export async function getCookies<ValueType>(
  key: string,
  defaultValue: ValueType,
): Promise<ValueType> {
  const cookieStore = cookies();
  const cookie = cookieStore.get(key)?.value;

  return cookie ? (JSON.parse(cookie) as ValueType) : defaultValue;
}

export async function setCookie<ValueType>(key: string, value: ValueType) {
  cookies().set(key, JSON.stringify(value));
  console.log("cookie set", key, value);
}

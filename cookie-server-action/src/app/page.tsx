"use client";

import { setCookie } from "./actions";

export default function HomePage() {
  return (
    <>
      <button
        className="m-auto block"
        onClick={() => setCookie("theme", "light")}
      >
        Light
      </button>
      <button
        className="m-auto block"
        onClick={() => setCookie("theme", "dark")}
      >
        Dark
      </button>
    </>
  );
}

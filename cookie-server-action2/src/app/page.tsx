"use client";

import { useState } from "react";
import { setCookie } from "./actions";

export default function HomePage() {
  const [state, setState] = useState(false);

  return (
    <>
      <button
        className="m-auto block"
        onClick={() =>
          fetch("api/set-cookie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: "theme", value: "light" }),
          })
        }
      >
        Light
      </button>
      <button
        className="m-auto block"
        onClick={() =>
          fetch("api/set-cookie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: "theme", value: "dark" }),
          })
        }
      >
        Dark
      </button>
      <button
        className="m-auto block"
        onClick={() => setState((prevState) => !prevState)}
      >
        Change State: {state ? "true" : "false"}
      </button>
    </>
  );
}

"use client";

import { useState } from "react";
import { setCookie } from "./actions";

let i = 0;

export default function HomePage() {
  const [state, setState] = useState(false);
  i++;
  console.log("render", i);

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
      <button
        className="m-auto block"
        onClick={() => setState((prevState) => !prevState)}
      >
        Change State: {state ? "true" : "false"}
      </button>
    </>
  );
}

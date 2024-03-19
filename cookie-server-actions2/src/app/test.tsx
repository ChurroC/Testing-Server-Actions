"use client";

import { useState } from "react";
import { setCookie } from "./actions";

export default function Test() {
  const [state, setState] = useState(false);

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

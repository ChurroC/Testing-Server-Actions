"use client";

import React from "react";
import { cookielessSmash } from "./actions";

export function ServerActionWithoutCookieComponent() {
  const [time, setTime] = React.useState<string | number>("empty");

  const handleClick = async () => {
    const { actionNow } = await cookielessSmash();
    setTime(actionNow);
  };

  return (
    <fieldset>
      <legend>Via Server Action WITHOUT Cookies</legend>
      <button onClick={handleClick}>Smash</button>
      Now {time}
    </fieldset>
  );
}

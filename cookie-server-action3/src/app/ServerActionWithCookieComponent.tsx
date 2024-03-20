"use client";

import React from "react";
import { smash } from "./actions";

export function ServerActionWithCookieComponent() {
  const [time, setTime] = React.useState<string | number>("empty");

  const handleClick = async () => {
    const { actionNow } = await smash();
    setTime(actionNow);
  };

  return (
    <fieldset>
      <legend>Via Server Action WITH Cookies</legend>
      <button onClick={handleClick}>Smash</button>
      Now {time}
    </fieldset>
  );
}

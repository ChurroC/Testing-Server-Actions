"use client";

import { useState } from "react";
import { setCookie } from "./actions";

export function ServerActionWithCookieComponent({
  cookie,
}: {
  cookie: string;
}) {
  const [theme, setTheme] = useState<string | number>(cookie);

  const handleClickLight = async () => {
    setCookie("light");
    setTheme("light");
  };
  const handleClickDark = async () => {
    setCookie("dark");
    setTheme("dark");
  };

  return (
    <fieldset>
      <legend>Via Server Action WITH Cookies</legend>
      <button onClick={handleClickLight}>Smash Light</button>
      <button onClick={handleClickDark}>Smash Dark</button>
      Now {theme}
    </fieldset>
  );
}

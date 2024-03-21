"use client";

import React from "react";

export function PagesApiComponent({ cookie }: { cookie: string }) {
  const [theme, setTheme] = React.useState<string | number>(cookie);

  const handleClickLight = async () => {
    void (await fetch("/api/set-cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: "light" }),
    }));
    setTheme("light");
  };
  const handleClickDark = async () => {
    void (await fetch("/api/set-cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: "dark" }),
    }));
    setTheme("dark");
  };

  return (
    <fieldset>
      <legend>Via Pages API WITH Cookies</legend>
      <button onClick={handleClickLight}>Smash Light</button>
      <button onClick={handleClickDark}>Smash Dark</button>
      Now {theme}
    </fieldset>
  );
}

"use client";

import React from "react";

export function PagesApiComponent() {
  const [time, setTime] = React.useState<string | number>("empty");

  const handleClick = async () => {
    const result = await fetch("/api/smash", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await result.json()) as unknown as { apiNow: number };
    setTime(data.apiNow);
  };

  return (
    <fieldset>
      <legend>Via Pages API WITH Cookies</legend>
      <button onClick={handleClick}>Smash</button>
      Now {time || "empty"}
    </fieldset>
  );
}

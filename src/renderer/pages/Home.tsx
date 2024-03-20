import React, { useEffect, useState } from "react";

export function Home_fn() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Home</h1>
        <p>Current time:</p>
      <p>{time}</p>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";

const themes = ["classic", "gradient", "minimal"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => themes[0]);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <select
      className="p-2 rounded bg-indigo-600 text-white shadow"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  );
}

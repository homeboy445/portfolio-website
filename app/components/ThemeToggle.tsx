"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // Check for theme preference in this order: localStorage -> system preference -> default to light
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        // Only update if user hasn't manually set a preference
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="fixed top-6 right-8 z-50 p-2 rounded-full transition-all duration-300 ease-in-out
        bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900
        border border-gray-200 dark:border-gray-700
        shadow-lg hover:shadow-xl
        transform hover:scale-110
        backdrop-blur-md"
    >
      <div className="relative w-6 h-6">
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${theme === "dark" ? "opacity-0" : "opacity-100"}`}>
          <MoonIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${theme === "dark" ? "opacity-100" : "opacity-0"}`}>
          <SunIcon className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </button>
  );
}

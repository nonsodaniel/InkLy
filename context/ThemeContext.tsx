"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

// Define the type for the context value
export interface IThemeContextValue {
  theme: string;
  toggle: () => void;
}

// Create the ThemeContext with the specified type
export const ThemeContext = createContext<IThemeContextValue | undefined>(
  undefined
);

const getThemeValueFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // A fallback value in case window is undefined
};

interface IThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return getThemeValueFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { ReactNode, useContext, useEffect, useState } from "react";
interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const { theme } = useContext(ThemeContext) ?? {};
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log({ provider: theme });

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;

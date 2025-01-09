import { createContext } from "react";

export const themes = {
  day: {
    color: "day-color",
    background: "day-background",
  },

  night: {
    color: "night-color",
    background: "night-background",
  },
};

export const ThemeContext = createContext();

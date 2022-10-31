import { ru } from "./ru";
import { uk } from "./uk";

export const translations = {
  ru,
  uk
};

export type TranslationKeys = keyof typeof translations;

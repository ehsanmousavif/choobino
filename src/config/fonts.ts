import { Geist_Mono as FontMono } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = localFont({
  variable: "--font-sans",
  src: "../../public/Estedad[KSHD,wght].woff2",
});

export const fontMono = FontMono({
  preload: false,
  adjustFontFallback: true,
  variable: "--font-mono",
});

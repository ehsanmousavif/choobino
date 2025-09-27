import { Fira_Code as FontMono, Vazirmatn as FontSans } from "next/font/google";

export const fontSans = FontSans({
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import Header from "@/components/header";

import "@/styles/globals.css";
import { cn } from "@heroui/theme";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fa-IR" dir="rtl">
      <head />
      <body
        className={cn(
          "md:px-8 min-h-screen antialiased bg-background font-sans",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            forcedTheme: "light",
          }}
        >
          <div className="relative flex flex-col h-screen container mx-auto px-6">
            <Header />

            <main className="flex-grow">{children}</main>

            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">ehsan</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

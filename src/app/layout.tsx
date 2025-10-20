import { Metadata, Viewport } from "next";
import { cn } from "@heroui/theme";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/header";
import { fontMono, fontSans } from "@/config/fonts";

import "@/styles/globals.css";
import Footer from "@/components/layout/footer";

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
          "md:min-h-screen antialiased bg-background font-sans",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            forcedTheme: "light",
          }}
        >
          <div className="relative flex flex-col h-screen container mx-auto">
            <Header />
            <main className="flex-grow">{children}</main>
            <div className="w-full">
              <Footer/>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

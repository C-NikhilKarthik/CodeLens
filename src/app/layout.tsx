import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import SessionWrapper from "@/components/SessionWrapper";

export const metadata: Metadata = {
  title: {
    template: "CodeLens | %s",
    default: "CodeLens",
  },
  description: "Code Analyser for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-color1 font-sans antialiased",
            inter.variable
          )}
        >
          {children}
          {/* <AuthContextProvider>{children}</AuthContextProvider> */}
        </body>
      </html>
    </SessionWrapper>
  );
}

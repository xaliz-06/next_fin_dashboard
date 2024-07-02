import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { Toaster } from "sonner";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

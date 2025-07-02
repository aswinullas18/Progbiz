import type { Metadata } from "next";
import "./globals.css";
import { montserrat, inter } from '@/lib/font'
import { ReactNode } from "react";

  
export const metadata: Metadata = {
  title: "Test App Progbiz",
  description: "Test page using next js 15",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${montserrat.className} ${inter.className} font-sans`}>
        
        {children}
      </body>
    </html>
  )
}

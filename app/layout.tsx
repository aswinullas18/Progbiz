import type { Metadata } from "next";
import "./globals.css";
import { montserrat, inter } from '@/lib/font'

  
export const metadata: Metadata = {
  title: "Test App Progribz",
  description: "Test page using next js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`bg-black ${montserrat.className} ${inter.className} font-sans`}>
        <div>Hello from layout</div>
        {children}
      </body>
    </html>
  )
}
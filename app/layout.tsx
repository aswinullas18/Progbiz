import type { Metadata } from "next";
import "./globals.css";
import { montserrat, inter } from '@/lib/font'

  
export const metadata: Metadata = {
  title: "Test App Progribz",
  description: "Test page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${montserrat.className} ${inter.className} font-sans`}>
    
  </body>
</html>
  );
}

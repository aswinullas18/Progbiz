import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

export const montserrat = Montserrat ({
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-montserrat',
  subsets:["latin"]
})
export const inter = Inter ({
  weight:['600'],
  variable:'--font-inter',
  subsets:["latin"]
})
  
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
      <body
        className={`${montserrat.className} ${inter.className} font-sans bg-black`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}

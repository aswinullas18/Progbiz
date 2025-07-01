
import { Montserrat, Inter } from 'next/font/google'

export const montserrat = Montserrat({
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const inter = Inter({
  weight: ['600'],
  variable: '--font-inter',
  subsets: ['latin'],
})
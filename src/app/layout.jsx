import Providers from '@/components/Providers'
import './globals.css'

export const metadata = {
  title: 'Karan Sharma | Frontend Developer',
  description: 'Karan Sharma is a frontend developer in Delhi, India, building responsive web applications with React, Next.js, and TypeScript.',
}

export const viewport = { themeColor: '#f8f9ff' }

export default function RootLayout({ children }) {
  return <html lang="en" data-scroll-behavior="smooth"><body><Providers>{children}</Providers></body></html>
}

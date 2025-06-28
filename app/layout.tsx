import Navbar from './component/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from './component/Footer'


console.log('Navbar:', Navbar)



export const metadata: Metadata = {
  title: 'Insurance Booking Applicationj ',
  description: 'App for booking insurance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body >
    <Navbar/>
      <main className='relative overflow-hidden'>
        {children}
        </main>
      <Footer/>
        </body>
     
    </html>
  )
}

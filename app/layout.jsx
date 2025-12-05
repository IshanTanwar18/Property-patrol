import React from 'react'
import '@/assets/styles/globals.css';

import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
export const metadata={
  title:'property-pulse |Find The Perfect Rental',
  description:'Find Your dream rental property',
  keywords:'rental,find rentals,find properties',
}

const Mainlayout = ({ children }) => {
  return (
  <AuthProvider>
    <html>
    <body>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </body>
    </html>
  </AuthProvider>
  )
}

export default Mainlayout;
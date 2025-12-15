import React from 'react'
import '@/assets/styles/globals.css';
import "maplibre-gl/dist/maplibre-gl.css";

import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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
    <ToastContainer/>
    </body>
    </html>
  </AuthProvider>
  )
}

export default Mainlayout;
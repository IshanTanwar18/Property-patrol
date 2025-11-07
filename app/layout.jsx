import React from 'react'
import '@/assets/styles/globals.css';

export const metadata={
  title:'property-pulse |Find The Perfect Rental',
  description:'Find Your dream rental property',
  keywords:'rental,find rentals,find properties',
}

const Mainlayout = ({ children }) => {
  return (
    <html>
   <body>
     <div>{children}</div>
   </body>
    </html>
   
  )
}

export default Mainlayout;
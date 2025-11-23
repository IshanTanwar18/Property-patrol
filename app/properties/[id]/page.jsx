'use client';
import { useRouter, useParams,useSearchParams,usePathname } from 'next/navigation';

import React from 'react'

const PropertyPage = () => {

  // This was for example of next/navigation

    // const Router=useRouter();
    // const { id }=useParams();
    // const searchParams=useSearchParams();
    // const name=searchParams.get('name');
    // const pathname=usePathname();
  return(
    <div>
        {/* <button onClick={()=>Router.push('/')}
        className="bg-blue-500 p-2"
        > 
         Go Home {pathname}
         {name}
          {id} 
       </button> */}

        Property Page
    </div>   
  )
}

export default PropertyPage 
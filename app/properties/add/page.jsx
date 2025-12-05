import React from 'react'
import Link from 'next/link';
import PrropertyCard from '@/components/PrropertyCard';
import properties from '@/properties.json';
const PropertiesPage= () => {
  return (
    <div>
       <section className="px-4 py-6">
              <div className="container-xl lg:container m-auto px-4 py-6">
               {properties.length===0 ?
               (<p>Properties not found</p>):
               (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {properties.map((property)=>(
                    <PrropertyCard key={property._id} property={property}/>
                  ))}
                </div>)}
                
              </div>
       </section>
    </div>
  )
}

export default PropertiesPage;
import React from 'react'
import Link from 'next/link';
import PrropertyCard from '@/components/PrropertyCard';
//it si a server component so we can do this as 
//it is not a client component
import {fetchProperties} from '@/util/request.js';
import PropertySearchForm from '@/components/PropertySearchForm';
const PropertiesPage= async() => {

  const data=await fetchProperties();
  const properties=data.properties;

//Sort Properties By date

properties.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
   


 return(
  <>
    <section className='bg-blue-700 py-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
        <PropertySearchForm/> 
      </div>
    </section>
   
    <div>
       <section className="px-4 py-6">
              <div className="container-xl lg:container m-auto px-4 py-6">
               {properties.length===0 ?
               (<p>Properties not found</p>):
               (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {properties.map((property,index)=>(
                    <PrropertyCard key={
    property._id?.$oid           // JSON export
    ?? property._id?.toString()  // MongoDB string
    ?? `property-${index}`       // fallback
    } property={property}/>
                  ))}
                </div>)}
                
              </div>
       </section>
    </div>
  </>);
}

export default PropertiesPage;
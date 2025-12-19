import React from 'react'
import Link from 'next/link';
// import PrropertyCard from '@/components/PrropertyCard';
//it si a server component so we can do this as 
//it is not a client component
import Properties from '@/components/Properties';
// import {fetchProperties} from '@/util/request.js';
import PropertySearchForm from '@/components/PropertySearchForm';
const PropertiesPage= async() => {

  // const data=await fetchProperties();
  // const properties=data.properties;

//Sort Properties By date

// properties.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
   


 return(
  <>
    <section className='bg-blue-700 py-4'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
        <PropertySearchForm/> 
      </div>
    </section>
   
    <div>
       <Properties/>
    </div>
  </>);
}

export default PropertiesPage;
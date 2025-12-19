// import PrropertyCard from './PrropertyCard';
// import Link from 'next/link';

// import {fetchProperties} from '@/util/request.js';



// const HomeProperties = async() => {
//     const data= await fetchProperties();
//     const properties=data?.properties||[];


//     const recentProperties= properties
//     .sort(()=>Math.random()-Math.random())
//     .slice(0,3);
//   return (
//     <div>
//      <section className="px-4 py-6">
//       <div className="container-xl lg:container m-auto px-4 py-6">
//          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
//             Recent Properties
//          </h2>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//          { recentProperties.length ===0? (
//             <p>No Properties Found</p>)
//             :
//             recentProperties.map((property)=>(
//                 <PrropertyCard key={property._id}  property={property}/>
//             )
//             )
//          }
//         </div>
        
//         </div>
//         </section>
//         <section className="m-auto max-w-lg my-10 px-6">
//            <Link href='/properties'
//                   className='block bg-black text-white
//                    text-center py-4 px-6 rounded-xl
//                    hover:bg-gray-700'>
//            View All Properties
//            </Link>
//         </section>
//         </div>
//   )
// }


'use client';

import { useEffect, useState } from 'react';
import PrropertyCard from './PrropertyCard';
import Link from 'next/link';

export default function HomeProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/properties', { cache: 'no-store' });
      const data = await res.json();

      const randomThree = data.properties
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

      setProperties(randomThree);
    }
    load();
  }, []);

  return (
    <section className="px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
        Recent Properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          properties.map(p => (
            <PrropertyCard key={p._id} property={p} />
          ))
        )}
      </div>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </section>
  );
}



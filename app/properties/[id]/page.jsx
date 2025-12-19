'use client';
// import { useRouter, useParams,useSearchParams,usePathname } from 'next/navigation';

import React from 'react'
import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa'
import Spinner from '@/components/Spinner';
import {useEffect,useState} from 'react';
import { useParams } from 'next/navigation';
import {fetchProperty} from '@/util/request.js';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyImages from '@/components/PropertyImages';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';
const PropertyPage = () => {

  // This was for example of next/navigation

    // const Router=useRouter();
    // const { id }=useParams();
    // const searchParams=useSearchParams();
    // const name=searchParams.get('name');
    // const pathname=usePathname();

    const {id} =useParams();
    const[property,setProperty]=useState(null);
    const[loading,setLoading]=useState(false);
  
     useEffect(()=>{
      const fetchPropertyData=async()=>{
        if(!id) return;
setLoading(true);

        try {
           const property=await fetchProperty(id);
           console.log(property);
           setProperty(property.property);
        } catch (error) {
          console.error('Error fetching property:',error);
        }
        finally{
          setLoading(false);
        }
      }
       if(property===null){ 
            fetchPropertyData();
       }

     },[id,property]);

     if(!property && !loading){
      return (
        <h1 className='text-center text-2xl font-bold mt-10'>Property not Found</h1>
      )
     }


  return<>

  {loading && <Spinner loading={loading}/>}
    {!loading && property && (<>
    <PropertyHeaderImage image={property.images[0]} />
     <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
         <FaArrowLeft className='mr-2'></FaArrowLeft>Back to Properties
        </Link> 
      </div>
    </section>

    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className='grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6'>
          <PropertyDetails property={property}/>
          <aside className="space-y-4">       
            <BookmarkButton property={property}/>
           <ShareButtons  property={property}/>

           
           <PropertyContactForm property={property}/>
          </aside>


        </div>
      </div>
    </section>
   <PropertyImages images={property.images}/>


    </>)}
  </>
}

export default PropertyPage 
// <div>
    //     {/* <button onClick={()=>Router.push('/')}
    //     className="bg-blue-500 p-2"
    //     > 
    //      Go Home {pathname}
    //      {name}
    //       {id} 
    //    </button> */}

        
    // </div>   
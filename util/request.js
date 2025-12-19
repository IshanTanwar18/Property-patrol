export const dynamic = 'force-dynamic';


//Fetch All properties
async function fetchProperties(){
  try{
    //Handle the case where domain is not available yet

   
          const res=await fetch(`https://property-patrol-git-master-ishan-tanwars-projects.vercel.app/api/properties`,{cache:
            'no-store'
          });
        
          if(!res.ok){
            throw new Error('Failed to fetch data');
          }
          return  res.json();
  }
  catch(error){
         console.log(error);
  }
}

//Fetch Single Properties
async function fetchProperty(id){
  try{
    //Handle the case where domain is not available yet

          const res=await fetch(`https://property-patrol-git-master-ishan-tanwars-projects.vercel.app/api/properties/${id}`, {
      cache: 'no-store',});
        
          if(!res.ok){
            throw new Error('Failed to fetch data');
          }
          return  res.json();
  }
  catch(error){
         console.log(error);
         return null
  }
}
export {fetchProperties,fetchProperty};
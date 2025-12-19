export const dynamic = 'force-dynamic';
const apiDomain=process.env.NEXT_PUBLIC_DOMAIN || null;



//Fetch All properties
async function fetchProperties(){
  try{
    //Handle the case where domain is not available yet

      if(!apiDomain){
 return { properties: [] };     
 }
          const url = `${apiDomain}/api/properties`;
console.log('fetchProperties url=', url);
const res = await fetch(url, { cache: 'no-store' });
const text = await res.text();
console.log('fetchProperties status=', res.status, 'body=', text.slice(0,1000));
if (!res.ok) throw new Error(`fetch failed ${res.status}`);
return JSON.parse(text);


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

      if(!apiDomain){
        return null;
      }
          const res=await fetch(`${apiDomain}/api/properties/${id}`, {
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
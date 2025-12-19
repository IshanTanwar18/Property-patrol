import React from 'react'

const Pagination = ({page,pageSize,totalItems,onPageChange}) => {
    const handlePageChange=(newPage)=>{
        if(newPage>=1&&newPage<=totalPages){
            onPageChange(newPage);
        }
    };

    const totalPages=Math.ceil(totalItems/pageSize);
  return (
  <section className="container mx-auto flex justify-center items-center my-8">
      <button 
      onClick={()=>handlePageChange(page-1)}
      className="mr-2 px-2 py-1 border border-gray-300 rounded" disabled={page===1}>
        Previous
      </button>
      <span className='mx-2'>
        Page {page} of {pageSize}
      </span>
      <button
              onClick={()=>handlePageChange(page+1)}

        disabled={page === totalPages}
        className='ml-2 px-2 py-1 border border-gray-300 rounded'>
        Next
      </button>
    </section>  )
}

export default Pagination
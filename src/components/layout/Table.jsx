 import React from 'react'
 import { Children } from 'react'
 function Table({ children }) {
   return (
     <>

<div className="container mt-5 px-2">
    
    <div className="table-responsive">
    <table className="table table-responsive table-borderless">
        {children}
      
    </table>
  
  </div>
    
</div>
     </>
   )
 }
 
 export default Table
import React from 'react'



function Card({reverse,children}) {

    
  return (
    <div className={`card mx-auto mb-5 ${reverse || reverse===undefined ? 'reverse' : null }`}> 
        {children}
    </div>
  )
}



export default Card  
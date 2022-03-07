import React from 'react'
import Spinner from '../../assets/dribbble.gif';

function spinner() {
  return (
    <div className="d-flex flex-column text-light text-center">
        <h3 className="m-0 p-0">Loading...</h3>
        <img src={Spinner} alt="loading..."  className="p-0 mx-auto" style={{width:"200px"}}/>
    </div>
  )
}

export default spinner
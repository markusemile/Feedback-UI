
// import {useState} from 'react'
import Card from './shared/Card';
import {FaTimes,FaEdit} from 'react-icons/fa'

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({item}){
    

    const {handleDelete,editFeedback} = useContext(FeedbackContext);

    if(item.reverse===undefined){
        item.reverse=false;
     } 
     
     const {id,rating,text} = item;

  return (
     <>
        <Card handleDelete={handleDelete} reverse={item.reverse}>
            <div className="num-display">{rating}</div>
                <div className='align-self-end edit-icon'  onClick={()=>editFeedback(item)}>
                    <button className="btn btn-danger m-2 btn-sm"><FaEdit /></button>
                </div>          
                <div className='align-self-end del-icon'  onClick={()=>handleDelete(id)}>
                    <button className="btn btn-danger m-2 btn-sm"><FaTimes /></button>
                </div>          
                <div className="text-display">
                    {text}
                </div>
        </Card>
    </>
  )
}

FeedbackItem.defaultProps={
    item: {
        reverse:false
    }
}


export default FeedbackItem
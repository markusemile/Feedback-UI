import { useState, useContext,useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/button";
import RatingSelect from "./RatingSelect";
import Navbar from "./layouts/navbar";
import AboutIconLink from "./shared/AboutIconLink";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

  
  const [disabledBut,setDisabledBut] = useState(true);
  const [message,setMessage]=useState('');

  const {addFeedback,feedbackEdit,setSelected,selected,update,setUpdate,review,setreview} = useContext(FeedbackContext) ;

  
  useEffect(()=>{
    setDisabledBut(false);
    setreview(feedbackEdit.item.text);
    setSelected(feedbackEdit.item.rating);
  },[feedbackEdit,setSelected])


  const handleReview = (e) =>{
    let textReview = e.target.value;
    setreview(textReview);
    if(textReview.length<10){
      setMessage('Text must be at least 10 characters');
      setDisabledBut(true);
    }else{
      setMessage(null);
      setDisabledBut(false);
    }
 
  }  


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(review.trim().length>10){
      const newFeedback = { rating:Number(selected),text:review }
      addFeedback(newFeedback);    
    }
  }

  return (
    
   <Card reverse={false}>
     <h1 className="mx-auto">FEEDBACK UI</h1>
     <div className="about-link">
     <AboutIconLink  />
     </div>
     <form className="d-flex flex-column justify-items-center align-items-center" onSubmit={(e)=>handleSubmit(e)} > 
       <h2>How would you rate your service with us ?</h2>
         <RatingSelect   />
       <div className="input-group">
         <input type="text" onChange={handleReview} value={review} placeholder="put your text here"  className="form-control" />
         <Button type="submit" isDisabled={disabledBut} version="secondary">{!update ? 'Send' :'Update'}</Button>
       </div>
        <div className="form-message" >
          <span className="text-danger">{message}</span>
        </div>

     </form>
  </Card>
  )
}



export default FeedbackForm
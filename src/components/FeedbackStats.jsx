import { useContext } from 'react';
import FeedbackContext from './../context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce((acc,curr)=>{
        return acc + curr.rating;
    },0)/feedback.length

  return (
    <>
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average.toFixed(1 ).replace(/[.,]0$/,' ')} </h4>
        </div>
        <hr/>
    </>
  )
}



export default FeedbackStats
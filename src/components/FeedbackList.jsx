import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length===0){
        return <p>No feedback Yet !</p>
    }

   
  return (
    <div className='feedback-list'>
        <AnimatePresence>
        {
            feedback.map((item)=>(
                <motion.div 
                key={item.id} 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0,y:50}} >
                    <FeedbackItem item={item} />
                </motion.div>
                ))
            }
        </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes={
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
    }))
}


export default FeedbackList
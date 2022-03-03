import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import InputRadio from "./shared/InputRadio";

function RatingSelect() {
    const maxRate = [0,1,2,3,4,5,6,7,8,9,10];

    const {selected,handleChange} = useContext(FeedbackContext);

    

    return (
        <>
            <ul className="rating d-flex flex-wrap">
                {maxRate.map((item)=>(
                    <li key={item}>
                    <InputRadio type="radio" id={`num${item}`} name="rating" value={item} handleChange={handleChange} selected={selected}/>
                    </li>
                ))
                }
            </ul>
        </>
)
}

export default RatingSelect
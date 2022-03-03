import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() { 
  return (
    <div className="row w-100 text-right">
        <div className=" ">
            <Link to="/about">
            <FaQuestion size={20} />
            </Link>
        </div>
    </div>
  )
}

export default AboutIconLink
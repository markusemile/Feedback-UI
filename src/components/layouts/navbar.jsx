import {NavLink as Link} from 'react-router-dom'
import Card from "../shared/Card"
function navbar() {
  return (

            <Card reverse={false}>
                <div className="d-flex">
                    <Link to="/" activeclassname="active">return to feedback</Link>
                </div>
            </Card>

  )
}

export default navbar
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
            <Link to="/CreatePortfolio">         
            <button>Create Portfolio</button>
        </Link>  
    </div>
  )
}

export default Sidebar
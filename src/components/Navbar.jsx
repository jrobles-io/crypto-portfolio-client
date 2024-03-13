import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/'>
            <button>Home</button>
        </Link>
    </div>
  )
}

export default Navbar
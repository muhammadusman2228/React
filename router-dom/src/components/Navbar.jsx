

import { Link ,NavLink} from "react-router-dom"
const Navbar=()=>{


    return(
        <>
        <nav> 
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  About
</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
  Contact
</NavLink></li>
        </ul>
            
        </nav>
        
        </>
    )
}

export default Navbar
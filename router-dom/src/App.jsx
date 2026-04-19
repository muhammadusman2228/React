import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import About from "./components/About"
import Contact from "./components/contact"
import Page from "./components/pagenotfound"
import Navbar from "./components/Navbar"


const App =()=>{


return(
  <>
  <div className="parent">
<Navbar/>
<Routes>

  <Route  path="/"  element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="*" element={<Page/>} />
</Routes>

  </div>
  
  </>
)


}
export default App
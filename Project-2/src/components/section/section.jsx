import Main from "./main"
import Navbar from "./navbar"

const Section=(probs)=>{
  
return(
    <>
    <div className=" h-screen w-full">
    <Navbar/>
    <Main user={probs.data}/>
    </div>
    </>
)
}
export default Section
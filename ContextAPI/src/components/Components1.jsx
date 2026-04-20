import { createContext } from "react"
import { countProvider } from "../context/context"



const Component1=({count})=>{
    const counter=createContext(countProvider)
    return(
        <div className="div">{counter}</div>
    )
}
export default Component1
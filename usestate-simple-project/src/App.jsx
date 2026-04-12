import { useState } from "react"

const App=()=>{

  const [num,setnum]=useState(0)
  const increase=()=>{
    setnum(num+1)
  }
   const decrease=()=>{
    setnum(num-1)
  }
  const jumpBy5=()=>{
    setnum(num+5)
  }
  return(<>
<h1>{num}</h1>
<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>
<button onClick={jumpBy5}>Increase By 5</button>
  </>)
}
export default App
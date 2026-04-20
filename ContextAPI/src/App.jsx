
import { useState } from 'react'
import Navbar from './components/Navbar'
// without using context api 
// function App() {

// const [count,setcount]=useState(0)
//   return (
//     <>
// <div className="div">
//   {/* now i want to display the count on the component one for this purpose without using context api i will do this with the help of prop drilling that is complex */}
//     <Navbar  count ={count}/>
//     </div>
//     <div className="counter">
//       <h2>The value of count is {count}</h2>

//       <button onClick={()=>{
//         setcount(count+1)
//       }}>Counter</button>
//     </div>
   
//     </>
//   )
// }

// export default App
import { countProvider } from './context/context'
function App() {

const [count,setcount]=useState(0)
  return (
    <>
    {/* now the value can be used by any components without prop drilling */}
  <countProvider.Provider value={count}>
<div className="div">
  {/* now i will use the context api concept for the same purpose  */}
    <Navbar  count ={count}/>
    </div>
    <div className="counter">
      <h2>The value of count is {count}</h2>

      <button onClick={()=>{
        setcount(count+1)
      }}>Counter</button>
    </div>
    </countProvider.Provider> 
   
    </>
  )
}

export default App


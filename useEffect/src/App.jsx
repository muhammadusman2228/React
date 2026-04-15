import { useEffect, useState } from "react"

//use a simple concept how actually the useEffect is working in react
const App=()=>{
    
    const [num1,setnum1]=useState(0)
    const [num2,setnum2]=useState(0)
    useEffect(()=>{
        console.log("I am changing ")},[num1]
    )
    return(
    <>
<div>
    <h1>I am here for testing </h1>
    <h2>The value is {num1} </h2>
    <h2>The value is {num2}</h2>
    <button onClick={()=>{
        setnum1(num1+1)
    }}>Increase </button>
    <button onClick={()=>{
        setnum2(num2+1)
    }}>Decrease</button>
</div>
</>


    )

}

export default App
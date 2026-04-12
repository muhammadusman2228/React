import { useState } from "react"

const App=()=>{
  const submitHandler=(e)=>{
    console.log("The form is submitted by",title)
    settitle('')
e.preventDefault()
  }
  const [title,settitle]=useState('')
  
  return(
    <>
    <form onSubmit={(e)=>{
submitHandler(e)
    }}>
      <input onChange={(e)=>{
        settitle(e.target.value)
      }} type="text" value={title} placeholder="Enter Your Name" />
      <button >Submit</button>
    </form>
    </>
  )
}
export default App
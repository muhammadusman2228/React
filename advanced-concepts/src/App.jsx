import { useState } from "react"

const App=()=>{
  const [num,setnum]=useState([10,38,48])
const changeNum=()=>{
  const newArr=[...num]
  newArr.push(Math.round(Math.random()*100))
  newArr.push(45)
  setnum(newArr)
}
const [mine,notmine]=useState({username:'Usman',age:23},{username:'Mine',age:23})
const obj=()=>{
  const newobj={...mine}
  notmine({...newobj,username:"newusername"})

}

return(
  <>
  <h1>HI I am {mine.username}</h1>
  <button onClick={obj}>Change </button>
  </>
)
}
export default App
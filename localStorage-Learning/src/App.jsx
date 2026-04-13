

const App=()=>{
  //  localStorage.setItem("user","usman")
  //  localStorage.removeItem('user')

  const user={
    name:"Usman",
    age:"21",
    Education:"doing becholar in the computer science"
  }
  localStorage.setItem("user",user)
  // to overcome this issue we must store data in the form of string as we store data in the key value paires and for this purpose we must use the JSON.stringfy method to store data in the lcoal storage of the browser and now lets go to implement this concept
   
localStorage.setItem("newUsser",JSON.stringify(user))
localStorage.clear()
return(
  <>
  <dv>
    <h1>It's me and I am here for the work that you gave for accomplish and i will accomplish it very soon</h1>
  </dv>
  </>
)
}
export default App
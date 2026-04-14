// import axios from "axios"
// import { useState } from "react"

// axios
// const App=()=>{
// const {data,setdata}=useState([])
// const getData=async()=>{
// //  const data=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// //  console.log(data)

// const data1= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
// console.log(data1.data)
// const newArr=data

// newArr.push(data1.data)
// setdata(newArr)
// console.log(data)
// }

// return(
//   <>
//   <button onClick={getData}><h1>Get data</h1></button>
  
//   </>
// )
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;


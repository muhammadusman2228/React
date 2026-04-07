import React from "react";
const Card=(props)=>{
    return(
        <>

        <div class="card">
            <img src={props.img} alt=""/>
            <h1>{props.username}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ex.</p>
            <button>Add Me</button>
        </div>
    
        </>
    )
}
export default Card
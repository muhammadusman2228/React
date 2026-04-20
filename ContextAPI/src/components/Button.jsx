import Component1 from "./Components1"


const Button=({count})=>{
    return(
        <div>
            <button>I am another button</button>
            <Component1 count={count}/>
        </div>
    )
}
export default Button
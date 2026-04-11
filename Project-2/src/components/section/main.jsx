import Left from "./left"
import Right from "./right"

const Main=(probs)=>{

    return(
        <>
        <div className=" w-full h-3/4 flex justify-between gap-10">
           <Left/>
           <Right mine={probs.user}/> 
        </div>
        </>
    )
}
export default Main
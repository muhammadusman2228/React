import Left from "./left.center"
import Right from "./right.center"

const Center=()=>{
    return(
        <>
        <div className="parent flex gap-5 justify-around mt-5">
            <Left/>
            <Right/>
        </div>
        </>
    )
}
export default Center
import Pic from "./pic"

const Right=(probs)=>{
    const arr=probs.mine
    console.log(arr)
    return(
        <>
<div id="i" className="right mt-4 w-3/4 mr-5 flex  justify-between ml-5 rounded-2xl shrink-0 overflow-auto ">
{arr.map((ele)=>{
return(
    <>
    <Pic img={ele.imageUrl} id={ele.id} discription={ele.description} button={ele.status}/>
    </>
)
})}


</div>
        </>
    )
}
export default Right
const Pic=(probs)=>{
    
    return(
        <>
<div className="pic w-1/4 h-full relative rounded-3xl m-3 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl shrink-0 overflow-hidden flex flex-col justify-between">
    <img className="object-cover w-full h-full rounded-3xl absolute inset-0 z-0" src={probs.img} alt="" />
    <div className="relative z-10 flex flex-col justify-between h-full p-2">
        <div>
            <h1 className=" m-3 px-3 text-gray-950 text-2xl font-bold bg-amber-100 rounded-[50%] w-10 h-10">{probs.id}</h1>
            <p className="font-medium text-amber-50 text-xl text-shadow-amber-400 mt-15">{probs.discription}</p>
        </div>
        <div className="me">
            <button className="py-3 hover:shadow-2xl px-8 m-5 bg-gray-950 text-amber-50 text-2xl font-bold rounded-full">{probs.button}</button>
        </div>
    </div>
</div>
        </>
    )
}
export default Pic
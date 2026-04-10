import Logo from "./logo.left.center"

const Left=()=>{
    return(
        <>
        
        <div className="parent w-90 h-120 rounded-2xl bg-amber-100 flex flex-col justify-between ">
            <div className="mine">
                <h1 className="text-gray-950 font-bold text-4xl pl-8 m-4">Prospective <br></br>customer<br></br>segmentation</h1>
                <p className="m-8 text-1 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, at. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, maxime!</p>
            </div>
            <div className="logo ml-10 mb-10">
                <Logo/>
            </div>
        </div>
        </>
    )
}
export default Left
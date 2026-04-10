const Pictures=(probs)=>{
    return(
    <>
    <div className="main flex flex-col justify-between m-6 shrink-0 w-60 h-96 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80')]">
    <div className="number w-1/9 h-1/9 text-2xl font-bold  text-gray-950 bg-amber-100 rounded-[50%] text-center mt-5 ml-3">1</div>
    <div className="center text-amber-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda obcaecati, officiis veritatis odit repudiandae nisi.</div>
    <div className="end font-bold bg-amber-50 text-gray-950 p-4 m-5 rounded-full max-w-fit text-center">
        <button>{probs.username}</button>
    </div>
    </div>
    </>
    )
}
export default Pictures
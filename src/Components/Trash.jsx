// import { Outlet, Link } from "react-router-dom";
const Trash = () => {
    return (
        <>
            {/* <header className="  pl-15 pr-15 fixed top-0 bg-white w-full  flex justify-between">
                <div className="text-3xl flex items-center">
                    Task Manster
                </div>
                <div className=" font-bold text-2xl flex justify-center items-center">
                    <Link className=" pt-8 pb-8 pl-3 pr-3 hover:bg-neutral-100" to={'/dashboard'}>Dashboard</Link>
                    <Link className=" pt-8 pb-8 pl-6 pr-6 hover:bg-neutral-100" to={'/tasks'} >Task</Link>
                    <Link className=" pt-8 pb-8 pl-4 pr-4 hover:bg-neutral-100" to={'/team'} >Team</Link>
                    <Link className="bg-neutral-100 border-b-6 border-b-blue-500 pt-8 pb-8 pl-4 pr-4" to={'/trash'} >Trash</Link>
                    <Outlet></Outlet>
                </div>
                <div className="font-bold text-2xl flex gap-8 justify-center items-center">
                    <i className="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
            </header> */}
            
            <h1>This is a Trash</h1>
        </>
    )
}
export default Trash;
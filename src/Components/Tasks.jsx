import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Create_Task from "./Create_Task";
const Tasks = () => {

    let tast_progress = ["INPROGRESS", "TODO", "COMPLETED", "DUETO"];
    let [creatTask, setCreateTask] = useState(false)

    return (
        <>
            {/* <header className="  pl-15 pr-15 fixed top-0 bg-white w-full  flex justify-between">
                <div className="text-3xl flex items-center">
                    Task Manster
                </div>
                <div className=" font-bold text-2xl flex justify-center items-center">
                    <Link className=" pt-8 pb-8 pl-3 pr-3 hover:bg-neutral-100" to={'/dashboard'}>Dashboard</Link>
                    <Link className="bg-neutral-100 border-b-blue-500 border-b-6 pt-8 pb-8 pl-6 pr-6" to={'/tasks'} >Task</Link>
                    <Link className=" pt-8 pb-8 pl-4 pr-4 hover:bg-neutral-100" to={'/team'} >Team</Link>
                    <Link className=" pt-8 pb-8 pl-4 pr-4 hover:bg-neutral-100" to={'/trash'} >Trash</Link>
                    <Outlet></Outlet>
                </div>
                <div className="font-bold text-2xl flex gap-8 justify-center items-center">
                    <i className="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
            </header> */}
            
            <>
            
                <section  className=" m-10 bg-neutral-100 min-h-screen p-10">
                    {
                        creatTask && 
                        <div className="h-screen bg-[#6b686878]  w-screen fixed top-0 left-0 flex justify-center items-center">
                            <Create_Task onClose={() => setCreateTask(false)}/>
                        </div>
                        
                    }
                    
                    <div className="flex justify-between items-center"> 
                        <p className="text-4xl font-bold">Task</p>
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-500 hover:text-black p-4 font-bold rounded-lg text-xl text-white flex items-center gap-2" onClick={() => {setCreateTask(true)}}>
                            <i class="fa-solid fa-plus"></i>Create Task</button>
                    </div>

                    <div className="flex gap-6 mt-6">
                        <Link className="bg-white px-4 py-2 rounded-md" to="todo">TO-DO</Link>
                        <Link className="bg-white px-4 py-2 rounded-md" to="inprogress">IN-PROGRESS</Link>
                        <Link className="bg-white px-4 py-2 rounded-md" to="completed">COMPLETED</Link>
                        <Link className="bg-white px-4 py-2 rounded-md" to="dueto">DUE-TO</Link>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        <Outlet></Outlet>
                    </div>
                </section>
            </>
        </>
    )
}
export default Tasks;
// import {FontAwesomeIcon} from 'react'

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TaskLogo from "../assets/Task_Master_Logo.png";

const Dashboard_Home = () => {
  // let [clr, setClr] = useState('red');
  // let [active, setActive] = useState('');
  let [open, setOpen] = useState(false);
  const location = useLocation();
  // const dropdownRef = useRef(null);
  let navigate = useNavigate();

  let style = `bg-neutral-100 border-b-blue-600 text-blue-600 border-b-6`;
  const menuItems = [
    { label: "Dashboard", link: "/dashboardHome/dashboard" },
    { label: "Task", link: "/dashboardHome/tasks/todo" },
    { label: "Team", link: "/dashboardHome/team" },
    { label: "Trash", link: "/dashboardHome/trash" },
  ];

  return (
    <>
      <header className=" pl-15 pr-15 fixed top-0 bg-white w-full  flex justify-between">
        <div className="text-3xl flex items-center">
          <img
            className="h-20 min-w-30 cursor-pointer"
            src={`${TaskLogo}`}
            onClick={()=> {navigate('/dashboardHome/dashboard'); setOpen(false)}}
            alt="Task_Master logo"
          />
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          {menuItems?.map((items, idx) => {
            return (
              <Link
                key={idx}
                to={items?.link}
                onClick={()=> {setOpen(false) }}
                
                className={`${ 
                  location.pathname.startsWith(items.link) ? style : ``
                } pt-8 pb-8 pl-3 pr-3 hover:bg-neutral-100`}
                // {...console.log(window.pathname)}
              >
                {items?.label}
              </Link>
            );
          })}
          {/* <Link className={`${active === "Task" ? style : `` } pt-8 pb-8 pl-6 pr-6 hover:bg-neutral-100`} to={'/dashboardHome/tasks'} onClick={() => {setActive("Task")}}>Task</Link>
                    <Link className={`${active === "Team" ? style : `` } pt-8 pb-8 pl-4 pr-4 hover:bg-neutral-100`} to={'/dashboardHome/team'} onClick={() => {setActive("Team")}}>Team</Link>
                    <Link className={`${active === "Trash" ? style : `` } pt-8 pb-8 pl-4 pr-4 hover:bg-neutral-100`} to={'/dashboardHome/trash'} onClick={() => {setActive("Trash")}}>Trash</Link> */}
        </div>
        <div className="font-bold text-2xl flex gap-8 justify-center items-center">
          <span className=" hover:border-b flex justify-center items-center hover:border-b-blue-400 h-full hover:text-blue-600">
            <i className=" fa-solid fa-bell"></i>
          </span>
          {/* <span>Notificat logo</span> */}
          {/* <span>profile logo</span> */}
          <span className=" hover:border-b flex justify-center items-center hover:border-b-blue-400 h-full hover:text-blue-600" onClick={() => {console.log("profileClicked"); setOpen(!open)}}>
            <i className=" fa-solid rounded-full fa-circle-user"></i>
          </span>
          
        </div>
      </header>

      <main className="min-h-screen bg-neutral-300 pt-20 " onClick={() => {setOpen(false)}}>
        {open && (
        <div className="absolute right-5 top-20 mt-2 w-58 bg-white shadow-lg rounded-lg p-3 z-50">
          <p className="font-semibold">{window.localStorage.getItem('email')}</p>
          <hr className="my-2" />
          <button className="block w-full text-xl text-left hover:bg-gray-100 p-2">
            Edit Profile
          </button>
          <button className="block w-full text-xl text-left hover:bg-gray-100 p-2 text-red-600" onClick={() => {window.localStorage.removeItem('email'); navigate('/')}}>
            Logout
          </button>
        </div>
      )}
        <Outlet ></Outlet>
      </main>
    </>
  );
};

export default Dashboard_Home;

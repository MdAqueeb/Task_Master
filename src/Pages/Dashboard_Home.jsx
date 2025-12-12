// import {FontAwesomeIcon} from 'react'

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import TaskLogo from "../assets/Task_Master_Logo.png";

const Dashboard_Home = () => {
  // let [clr, setClr] = useState('red');
  let [active, setActive] = useState(0);

  let style = `bg-neutral-100 border-b-blue-600 text-blue-600 border-b-6`;
  const menuItems = [
    { label: "Dashboard", link: "/dashboardHome/dashboard" },
    { label: "Task", link: "/dashboardHome/tasks" },
    { label: "Team", link: "/dashboardHome/team" },
    { label: "Trash", link: "/dashboardHome/trash" },
  ];

  return (
    <>
      <header className=" pl-15 pr-15 fixed top-0 bg-white w-full  flex justify-between">
        <div className="text-3xl flex items-center">
          <img
            className="h-20 min-w-30"
            src={`${TaskLogo}`}
            alt="Task_Master logo"
          />
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          {menuItems?.map((items, idx) => {
            return (
              <Link
                key={idx}
                onClick={()=> setActive(idx)}
                className={`${
                  active === idx ? style : ``
                } pt-8 pb-8 pl-3 pr-3 hover:bg-neutral-100`}
                to={items?.link}
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
          <span className=" hover:border-b flex justify-center items-center hover:border-b-blue-400 h-full hover:text-blue-600">
            <i className=" fa-solid rounded-full fa-circle-user"></i>
          </span>
        </div>
      </header>
      <main className="h-screen bg-neutral-300 pt-25">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Dashboard_Home;

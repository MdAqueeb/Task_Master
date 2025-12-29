// import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { countCompletedStatus, countInProgressStatus, countOverDueStatus, countSpecificStatus, countToDoStatus } from "../APIs/User";
const Dashboard = () => {
  let [user_data, setData] = useState([
    {
      title: "this is first title",
      piority: "high",
      team: "user",
      created: "3/4/56",
    },
    {
      title: "this is first title",
      piority: "low",
      team: "user",
      created: "3/4/56",
    },
  ]);

  let [totalTask, setTotalTask]= useState();
  let [completedTask, setCompletedTask] = useState();
  let [inProgressTask, setInProgressTask] = useState();
  let [toDo, setToDo] = useState();
  let [DueTO, setDueTo] = useState();

  useEffect(() => {
    // console.log("Yeah going to api call");
    countSpecificStatus(window.localStorage.getItem("email"))
      .then((res) => {
        // console.log(res.data + " " + res.status);
        setTotalTask(res.data);
      })
      .catch((err) => {
        // console.log(err, 'errooo');
      });
    countCompletedStatus(window.localStorage.getItem('email'))
      .then((res) => {
        // console.log(res.data + " " + res.status);
        setCompletedTask(res.data);
      })
      .catch((err) => {
        // console.log(err, 'errooo');
      });
    
    countInProgressStatus(window.localStorage.getItem('email'))
      .then((res) => {
        // console.log(res.data + " " + res.status);
        setInProgressTask(res.data)
      })
      .catch((err) => {
        // console.log(err, 'errooo');
      });

      countOverDueStatus(window.localStorage.getItem('email'))
      .then((res) => {
        // console.log(res.data + " " + res.status);
        setDueTo(res.data)
      })
      .catch((err) => {
        // console.log(err, 'errooo');
      });
      countToDoStatus(window.localStorage.getItem('email'))
      .then((res) => {
        // console.log(res.data + " " + res.status);
        setToDo(res.data)
      })
      .catch((err) => {
        // console.log(err, 'errooo');
      });
    
      
  }, [totalTask, completedTask, inProgressTask, toDo, DueTO]);

  return (
    <>
      {/*Total task,  completed task, Task in progress, Todos, overdue  */}
      {/* <h1>This is a Dashboard</h1> */}

      <section className=" flex flex-wrap gap-y-8 gap-x-4 pl-3 pr-3 justify-around pt-8">
        <div className=" bg-white p-5 flex items-center rounded-lg justify-between min-w-2xs">
          <div>
            <div className="text-xl">TOTAL TASK</div>
            <span className="text-2xl font-bold">{totalTask}</span>
          </div>
          <div>
            <span className="text-2xl text-blue-600 font-bold">
              <i className="fa-solid fa-list-check"></i>
            </span>
          </div>
        </div>
        <div className="bg-white p-5 flex justify-between items-center rounded-lg min-w-2xs">
          <div>
            <div className="text-xl">COMPLETED TASK</div>
            <span className="text-2xl font-bold">{completedTask}</span>
            {/* <span><i className="fa-solid fa-check-double"></i></span> */}
          </div>
          <div>
            <span className="text-2xl text-green-500 font-bold">
              <i className="fa-solid fa-circle-check"></i>
            </span>
          </div>
        </div>
        <div className="bg-white p-5 flex justify-between items-center rounded-lg min-w-2xs">
          <div>
            <div className="text-xl">IN-PROGRESS TASK</div>
            <span className="text-2xl font-bold">{inProgressTask}</span>
          </div>
          <div>
            <span className="text-2xl text-orange-500 font-bold">
              <i className="fa-regular fa-hourglass-half"></i>
            </span>
          </div>
        </div>
        <div className="bg-white p-5 flex justify-between items-center rounded-lg min-w-2xs">
          <div>
            <div className="text-xl">TO-DO</div>
            <span className="text-2xl font-bold">{toDo}</span>
            {/* <span><i className="fa-solid fa-list-ul"></i></span> */}
          </div>
          <div>
            <span className="text-2xl text-yellow-400 font-bold">
              <i className="fa-solid fa-clipboard-list"></i>
            </span>
          </div>
        </div>
        <div className="bg-white p-5 flex justify-between items-center rounded-lg min-w-2xs">
          <div>
            <div className="text-xl">DUETO</div>
            <span className="text-2xl font-bold">{DueTO}</span>
            {/* <span><i className="fa-solid fa-hourglass-start"></i></span>
                        <span><i className="fa-solid fa-calendar-day"></i></span> */}
          </div>
          <div>
            <span className="text-2xl text-red-600 font-bold">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </span>
          </div>
        </div>
      </section>
      <section className="border border-red-600 pl-10 pr-10">
        {/* in progress tasks, completed task */}

        <section className="bg-white min-w-7xs w-full p-6 rounded-3xl mt-8 mb-8">
          <p className="text-center text-2xl text-blue-700">On-Going Task</p>
          <div className=" mt-3">
            {/* task title, piority, team, createdAt */}
            {/* <table className="mt-8 w-full" cellPadding={10}>
                            <thead className="">
                                <tr className="text-2xl">
                                    <th className=" ">Title</th>
                                    <th>Piority</th>
                                    <th>Team</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody className=" ">
                                {
                                    (user_data.length === 0) ? 
                                    <tr><h1>task empty</h1></tr> :
                                    user_data.map((item) => {
                                        return  <tr className="">
                                            {console.log(item.title)}
                                            <td className="border">{item.title}</td>
                                            <td className="border">{item.piority}</td>
                                            <td className="border">{item.team}</td>
                                            <td className="border">{item.created}</td>
                                        </tr>
                                    })
                                }
                                
                            </tbody>
                        </table> */}

            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              {user_data.length === 0 ? (
                <h1>No Task</h1>
              ) : (
                <table class="w-full text-sm text-left rtl:text-right text-body">
                  <thead class="bg-neutral-secondary-soft border-b border-default">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Piority
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Team
                      </th>
                      {/* <th scope="col" class="px-6 py-3 font-bold">
                      Price
                    </th> */}
                      <th scope="col" className="px-6 py-3 font-bold">
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user_data.map((items) => {
                      return (
                        <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                          >
                            {/* Apple MacBook Pro 17" */}
                            {items.title}
                          </th>
                          <td
                            className={`px-6 py-4 ${
                              items.piority === "high"
                                ? "text-red-600"
                                : items.piority === "low"
                                ? "text-green-500"
                                : "text-yellow-400"
                            }`}
                          >
                            {items.piority}
                          </td>
                          <td className="px-6 py-4">{items.team}</td>
                          <td className="px-6 py-4">{items.created}</td>
                          {/* <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-fg-brand hover:underline"
                      >
                        Edit
                      </a>
                    </td> */}
                        </tr>
                      );
                    })}

                    {/* <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-fg-brand hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-fg-brand hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Google Pixel Phone
                    </th>
                    <td class="px-6 py-4">Gray</td>
                    <td class="px-6 py-4">Phone</td>
                    <td class="px-6 py-4">$799</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-fg-brand hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-fg-brand hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr> */}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;

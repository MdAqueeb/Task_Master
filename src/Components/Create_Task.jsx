
// const Create_Task = ({onClose}) => {
//     // title, Members, task stage(todo, in-progress), piority level, start date, end date 
//     // assessts


//     return (
//         <>
//             <section className="p-8 bg-[rgb(239,239,239)] w-1/2">
//                 <div className="float-right hover:text-red-600 cursor-pointer">X</div>
//                 <p className="font-bold text-2xl p-5">Create New Task</p>
//                 <form>
//                     <div className="flex flex-col bg-white p-2 rounded-lg">
//                        <label htmlFor="title" className="font-bold">Task Title</label>
//                         <input className="p-2 w-full outline-none focus:border-blue-600" type="text" name="title" id="title" placeholder="Task title" required/> 
//                     </div>
//                     <br />
//                     <div className="p-2 rounded-lg bg-white">
//                         <textarea className="p-2 w-full  outline-none focus:border-blue-600" rows={3} type="text" name="title" id="title" placeholder="Task Description" required/> 
//                     </div>
//                     <br />
//                     <div className="">
//                             <label htmlFor="piority" className="text-xl font-bold">Piority</label>
//                             <div className="flex gap-2 p-3  justify-evenly">
//                                 <div>
//                                     <input type="radio" id="piority" name="piority" defaultChecked />Low
//                                 </div>
//                                 <div>
//                                     <input type="radio" id="piority" name="piority" />Medium
//                                 </div>
//                                 <div>
//                                     <input type="radio" id="piority" name="piority" />High
//                                 </div>
//                             </div>
//                     </div>
//                     <br />
//                     <div className="flex flex-wrap">
                        
//                         <div className="w-1/2">
//                             <label htmlFor="start" className="font-bold">Start Date</label><br />
//                             <input type="date" id="start" name="start"/>
//                         </div>
//                         <div className="w-1/2">
//                             <label htmlFor="start" className="font-bold">Due Date</label><br />
//                             <input type="date" id="start" name="start"/></div>
//                         </div>
//                     <div className="font-bold">
//                         Assignees
//                     </div>
//                     <div className="flex justify-around">
//                         <button className="bg-neutral-400 p-2 rounded-md hover:bg-neutral-300" onClick={() => {!createTask}}>Cancel</button>
//                         <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600" onClick={() => {console.log(created)}}>Create Task</button>
//                     </div>
//                 </form>
//             </section>

            
//         </>
//     )
// }

// export default Create_Task;


import { useState } from "react";

const teamMembers = [
  { id: 1, name: "Ahmed", avatar: "/src/assets/profile_avatar.webp" },
  { id: 2, name: "Aqueeb", avatar: "/src/assets/profile_avatar.webp" },
  { id: 3, name: "Mohammed", avatar: "/src/assets/profile_avatar.webp" },
];

const priorities = ["LOW", "MEDIUM", "HIGH"];

const Create_Task = ({ onClose }) => {
  // basic fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("LOW");

  // dates
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // assignees
  const [search, setSearch] = useState("");
  const [assignees, setAssignees] = useState([]);

  // assets
  const [assets, setAssets] = useState([]);

  // add assignee
  const addAssignee = (member) => {
    if (!assignees.find((a) => a.id === member.id)) {
      setAssignees([...assignees, member]);
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      priority,
      startDate,
      dueDate,
      assignees,
      assets,
    };

    console.log("TASK CREATED:", payload);

    onClose(); // close after submit
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <section className="relative bg-[rgb(239,239,239)] w-1/2 p-6 rounded-xl shadow-lg">

        {/* Close */}
        <span
          onClick={onClose}
          className="absolute top-4 right-4 text-xl cursor-pointer hover:text-red-600"
        >
          ✕
        </span>

        <h2 className="text-2xl font-bold mb-5">Create New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            placeholder="Task title"
            className="w-full p-2 rounded-md border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Description */}
          <textarea
            rows={3}
            placeholder="Task description"
            className="w-full p-2 rounded-md border"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Priority */}
          <div>
            <p className="font-bold mb-2">Priority</p>
            <div className="flex gap-3">
              {priorities.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`px-4 py-2 rounded-full border
                    ${
                      priority === p
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="font-bold">Start Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="font-bold">Due Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          {/* Assignees */}
          <div>
            <label className="font-bold">Assignees</label>
            <input
              type="text"
              placeholder="Search team member"
              className="w-full p-2 border rounded-md mt-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <div className="mt-1 bg-white border rounded-md max-h-36 overflow-auto">
                {teamMembers
                  .filter((m) =>
                    m.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((member) => (
                    <div
                      key={member.id}
                      onClick={() => addAssignee(member)}
                      className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={member.avatar}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{member.name}</span>
                    </div>
                  ))}
              </div>
            )}

            {/* Selected avatars */}
            <div className="flex gap-2 mt-2">
              {assignees.map((a) => (
                <img
                  key={a.id}
                  src={a.avatar}
                  title={a.name}
                  className="w-10 h-10 rounded-full border"
                />
              ))}
            </div>
          </div>

          {/* Assets */}
          <div>
            <label className="font-bold">Assets</label>
            <label className="flex items-center gap-2 cursor-pointer text-blue-600 mt-1">
              <i className="fa-solid fa-paperclip"></i>
              Add Assets
              <input
                type="file"
                multiple
                hidden
                onChange={(e) => setAssets([...e.target.files])}
              />
            </label>

            <div className="flex gap-2 flex-wrap mt-2">
              {assets.map((file, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 rounded-md text-sm"
                >
                  {file.name}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Task
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};

export default Create_Task;

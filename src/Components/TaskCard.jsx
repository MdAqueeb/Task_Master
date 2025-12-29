const statusStyles = {
  TODO: "text-yellow-500",
  INPROGRESS: "text-orange-500",
  COMPLETED: "text-green-600",
  DUETO: "text-red-600",
};

const TaskCard = ({ status }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-md w-72">
      {/* Priority */}
      <div className={`font-bold ${statusStyles[status]}`}>
        {status}
      </div>

      {/* Title */}
      <div className="flex flex-col mt-2">
        <span className="text-xl font-bold">Task Title</span>
        <span className="text-sm text-gray-500">Created at: 12-12-2025</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-3 text-gray-500 text-sm">
          <span>
            <i className="fa-solid fa-paperclip"></i> 3
          </span>
          <span>
            <i className="fa-regular fa-comment"></i> 2
          </span>
        </div>

        <div className="flex -space-x-2">
          <img
            src="/src/assets/profile_avatar.webp"
            className="w-8 h-8 rounded-full border"
          />
          <img
            src="/src/assets/profile_avatar.webp"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

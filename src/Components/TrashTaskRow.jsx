const TrashTaskRow = ({ task, onRestore, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg border hover:bg-neutral-50">
      {/* Task Info */}
      <div className="flex flex-col">
        <span className="font-bold">{task.title}</span>
        <span className="text-sm text-gray-500">
          Deleted on: {task.deletedAt}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => onRestore(task.id)}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
        >
          <i className="fa-solid fa-rotate-left"></i> Restore
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center gap-2"
        >
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default TrashTaskRow;

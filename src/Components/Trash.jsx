import { useState } from "react";
import TrashTaskRow from "./TrashTaskRow";

const Trash = () => {
  // Dummy trash tasks (replace with API)
  const allTrashTasks = [
    {
      id: 1,
      title: "Fix login bug",
      deletedAt: "12-12-2025",
    },
    {
      id: 2,
      title: "Design dashboard UI",
      deletedAt: "10-12-2025",
    },
    {
      id: 3,
      title: "Prepare API docs",
      deletedAt: "08-12-2025",
    },
  ];

  /* ---------------- Pagination ---------------- */
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedTasks = allTrashTasks.slice(
    start,
    start + itemsPerPage
  );

  const totalPages = Math.ceil(allTrashTasks.length / itemsPerPage);

  /* ---------------- Actions ---------------- */
  const handleRestore = (id) => {
    console.log("Restore task:", id);
    // call restore API
  };

  const handleDelete = (id) => {
    console.log("Delete permanently:", id);
    // call delete API
  };

  return (
    <section className="m-10 bg-neutral-100 p-10 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Trash</h1>

      {/* List */}
      <div className="flex flex-col gap-4">
        {paginatedTasks.length === 0 ? (
          <p className="text-center text-gray-500">Trash is empty</p>
        ) : (
          paginatedTasks.map((task) => (
            <TrashTaskRow
              key={task.id}
              task={task}
              onRestore={handleRestore}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-md ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 rounded-md ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-md ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Trash;

import { useState } from "react";
import TeamMemberRow from "./TeamMemberRow";
// import TeamMemberRow from "./TeamMemberRow";

const Team = () => {
  // Dummy data (replace with API)
  const allMembers = [
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@gmail.com",
      role: "Admin",
      avatar: "/src/assets/profile_avatar.webp",
    },
    {
      id: 2,
      name: "Aqueeb",
      email: "aqueeb@gmail.com",
      role: "Developer",
      avatar: "/src/assets/profile_avatar.webp",
    },
    {
      id: 3,
      name: "Mohammed",
      email: "mohammed@gmail.com",
      role: "Tester",
      avatar: "/src/assets/profile_avatar.webp",
    },
    // add more
  ];

  /* ---------------- Filters ---------------- */
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");

  const filteredMembers = allMembers.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = role === "ALL" || m.role === role;

    return matchSearch && matchRole;
  });

  /* ---------------- Pagination ---------------- */
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(
    start,
    start + itemsPerPage
  );

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  return (
    <section className="m-10 bg-neutral-100 p-10 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Team Members</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search name or email"
          className="p-2 rounded-md border w-64"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />

        <select
          className="p-2 rounded-md border"
          value={role}
          onChange={(e) => {
            setPage(1);
            setRole(e.target.value);
          }}
        >
          <option value="ALL">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
        </select>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {paginatedMembers.length === 0 ? (
          <p className="text-gray-500 text-center">No members found</p>
        ) : (
          paginatedMembers.map((member) => (
            <TeamMemberRow key={member.id} member={member} />
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

export default Team;

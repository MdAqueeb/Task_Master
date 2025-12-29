const TeamMemberRow = ({ member }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg border hover:bg-neutral-50">
      {/* Avatar */}
      <img
        src={member.avatar}
        className="w-12 h-12 rounded-full border"
        alt={member.name}
      />

      {/* Info */}
      <div className="flex flex-col flex-1">
        <span className="font-bold">{member.name}</span>
        <span className="text-sm text-gray-500">{member.email}</span>
      </div>

      {/* Role */}
      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
        {member.role}
      </span>
    </div>
  );
};

export default TeamMemberRow;

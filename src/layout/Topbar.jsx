import React from "react";
import DarkModeToggle from "../DarkModeToggle";
const Topbar = ({ role, setRole }) => {
  return (
    <div className="h-16 flex flex-row shrink-0 bg-white dark:bg-gray-800 dark:text-white shadow-sm items-center justify-between px-4 border-b border-gray-100 dark:border-gray-700   ">
      <div className="text-xl font-normal">Welcome Back</div>
      <div className="flex gap-5">
        <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="border p-2 rounded-xl dark:bg-gray-700"
>
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Topbar;

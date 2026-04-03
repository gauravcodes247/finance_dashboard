import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineInsights } from "react-icons/md";
// import { GrTransaction } from "react-icons/gr";

const Sidebar = () => {

  const location = useLocation();

  return (
    <div className='w-64 h-screen flex flex-col shrink-0 bg-[#7B60DA] dark:bg-primary-dark hidden md:block border-r border-gray-300 dark:border-gray-700 dark:text-white p-4  '>
     
     <div className='mb-6 font-bold text-xl text-white dark:text-white mt-4 mb-8 flex justify-center'>Finance Dashboard</div>
     <div className='flex flex-col gap-4'>

       <Link
  to="/"
  className={`p-4 cursor-pointer text-md rounded-2xl transition-all flex items-center 
  ${
    location.pathname === "/"
      ? "bg-white dark:bg-gray-700 text-black dark:text-white font-medium"
      : "text-white font-semibold hover:bg-white/10"
  }`}
>
  <LuLayoutDashboard className="mr-2" />
  Dashboard
</Link>

<Link
  to="/insights"
  className={`p-4 cursor-pointer text-md rounded-2xl transition-all flex items-center
  ${
    location.pathname === "/insights"
      ? "bg-white dark:bg-gray-700 text-black dark:text-white font-medium"
      : "text-white font-semibold hover:bg-white/10"
  }`}
>
  <MdOutlineInsights className="mr-2" />
  Insights
</Link>
{/* <Link
  to="/transactions"
  className={`p-4 cursor-pointer text-md rounded-2xl transition-all flex items-center
  ${
    location.pathname === "/transactions"
      ? "bg-white dark:bg-gray-700 text-black dark:text-white font-medium"
      : "text-white font-semibold hover:bg-white/10"
  }`}
>
  <GrTransaction className="mr-2" />
  Transactions
</Link> */}

     </div>
    </div>
  )
}

export default Sidebar
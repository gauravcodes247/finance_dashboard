import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useState } from 'react'
import transactions from '../data/transactions'
const AppLayout = () => {
  const [role, setRole] = useState("admin");
    const [data, setData] = useState(transactions);

  return (
    
 <div>

       <div className='flex h-screen bg-gray-200 bg-primary dark:bg-gray-900  font-poppins'>
      
        <Sidebar/>
   
      <div className='flex-1 flex flex-col '>
        <Topbar role={role} setRole={setRole}/>
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet context={{ role,data, setData }} />
        </div>
      </div>
    </div>
 </div>
  )
}

export default AppLayout

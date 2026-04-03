import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import Transactions from './pages/Transactions'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout></AppLayout>}>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/insights' element={<Insights></Insights>}></Route>
          <Route path='/transactions' element={<Transactions></Transactions>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

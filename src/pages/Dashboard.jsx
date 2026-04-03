import React from 'react'
import transactions from '../data/transactions'
import { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import OverviewChart from '../components/OverViewChart'
import CategoryPieChart from "../components/CategoryPieChart";
import StatCard from '../components/StatCrad';
import TransactionForm from "../components/TransactionForm";
import TransactionRow from "../components/TransactionRow";
import Modal from "../components/Modal";


const Dashboard = () => {
  const { data, setData,} = useOutletContext(); 
  const { role } = useOutletContext();
const [searchTerm, setSearchTerm] = useState("");
const [filterType, setFilterType] = useState("");
const [error, setError] = useState("");

const [newTxn, setNewTxn] = useState({
  category: "",
  amount: "",
  type: "income",
});
const [showForm, setShowForm] = useState(false);

// console.log(searchTerm)



const income = data
  .filter((t) => t.type === "income")
  .reduce((acc, t) => acc + Number(t.amount), 0);

const expenses = data
  .filter((t) => t.type === "expense")
  .reduce((acc, t) => acc + Number(t.amount), 0);
const balance = income - expenses;

const savings = balance; 

const user = {
  name:"Gaurav",
  role:role,
  id:1
};


const filteredTransactions = data.filter((txn) => {

  const matchesRole =
    user.role === "admin" || !txn.userId || txn.userId === user.id;

  const matchesSearch =
    txn.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    txn.type.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesFilter =
    filterType === "" || txn.type === filterType;

  return matchesRole && matchesSearch && matchesFilter;
});

const handleDelete = (id) => {
  const updated = data.filter((txn) => txn.id !== id);
  setData(updated);
};
const handleAdd = () => {
  if (!newTxn.category.trim()) {
    setError("Category is required");
    return;
  }

  if (!newTxn.amount || isNaN(newTxn.amount)) {
    setError("Enter a valid amount");
    return;
  }

  setError("");

  const newTransaction = {
    id: Date.now(),
    ...newTxn,
    date: new Date(),
    userId: user.id,
  };

  setData([newTransaction, ...data]);
  setShowForm(false);

  setNewTxn({
    category: "",
    amount: "",
    type: "income",
  });
};
  return (
    <div>
        {/* Stats grid */}
      

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
  <StatCard title="Total Balance" amount={balance.toFixed(2)} change="+2.5% from last month" />
  <StatCard title="Income" amount={income.toFixed(2)} change="+5% from last month" />
  <StatCard title="Expenses" amount={expenses.toFixed(2)} change="-2% from last month" />
  <StatCard title="Savings" amount={savings.toFixed(2)} change="+10% from last month" />
</div>

         {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
            <div className=' bg-white dark:bg-gray-800 dark:text-white shadow-sm  rounded-2xl p-4 h-[350px] col-span-2  border-gray-100 border dark:border-gray-700 '>
                <div className='flex justify-between '><h2>Overview Chart</h2><h3>Last 7 days</h3></div>
                <OverviewChart data={data}/>
            </div>
            <div className=' bg-white dark:bg-gray-800 dark:text-white shadow-sm rounded-2xl p-4  h-[350px] col-span-1 border border-gray-100 dark:border-gray-700 '>
                <div className='flex justify-between '><h2>Category Pie Chart</h2></div>
                <CategoryPieChart data={data}/>
            </div>
            </div>

            {/* Recent Transactions table */}
            <div className='bg-white dark:bg-gray-800 dark:text-white shadow-sm rounded-2xl p-4 col-span-3 mt-4 border-2 border-gray-100 dark:border-gray-700'>
              <div className='flex justify-between items-center'>

                <h2 className='text-lg font-semibold mb-4'>Recent Transactions</h2> 
                <div className='flex justify-around items-center gap-10'>

                <input type="text" className='mb-4 border border-gray-800 dark:border-gray-300 rounded-xl p-2' placeholder='Search...' 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select name="" id="" className='p-2 mb-4 rounded-xl border border-gray-800 dark:border-gray-300 text-black dark:text-white dark:bg-gray-700' onChange={(e) => setFilterType(e.target.value)} >
                    <option value="">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                {user.role === "admin" && (
                <button
  className='bg-[#7B60DA] hover:bg-[#6a50c0] text-white font-bold py-2 px-4 rounded-xl mb-4'
  onClick={() => setShowForm(true)}
>
  Add Transaction
</button>
                )}
               {showForm && (
  <Modal onClose={() => setShowForm(false)}>
    <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

    <TransactionForm
  newTxn={newTxn}
  setNewTxn={setNewTxn}
  handleAdd={handleAdd}
  error={error}
/>
  </Modal>
)}
                </div>
              </div>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50 dark:bg-gray-700'>
                        <tr >
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Amount</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
                            {user.role === "admin" && (
  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
    Actions
  </th>
)}
                        </tr>
                    </thead>
                    <tbody>
  {filteredTransactions.map((txn) => (
    <TransactionRow
      key={txn.id}
      txn={txn}
      user={user}
      handleDelete={handleDelete}
    />
  ))}
</tbody>
                </table>
            </div>


    </div>
  )
}

export default Dashboard

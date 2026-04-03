const TransactionForm = ({ newTxn, setNewTxn, handleAdd, error }) => {
  return (
    <>
    {error && (
  <p className="text-red-500 text-sm mb-2">{error}</p>
)}
      <input
        className='mb-4 border border-gray-800 dark:border-gray-300 rounded-xl p-2'
        placeholder="Category"
        onChange={(e) =>
          setNewTxn({ ...newTxn, category: e.target.value })
        }
      />

      <input
        className='mb-4 border border-gray-800 dark:border-gray-300 rounded-xl p-2'
        placeholder="Amount"
        onChange={(e) =>
          setNewTxn({ ...newTxn, amount: e.target.value })
        }
      />

      <select
        className='mb-4 border border-gray-800 dark:border-gray-300 rounded-xl p-2'
        onChange={(e) =>
          setNewTxn({ ...newTxn, type: e.target.value })
        }
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button
        onClick={handleAdd}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mb-4'
      >
        Save
      </button>
    </>
  );
};

export default TransactionForm;
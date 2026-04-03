const TransactionRow = ({ txn, user, handleDelete }) => {
  return (
    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
      <td className='px-6 py-4 whitespace-nowrap'>{txn.category}</td>

      <td
        className={`px-6 py-4 whitespace-nowrap ${
          txn.type === "income"
            ? "text-green-700 dark:text-green-200"
            : "text-red-500 dark:text-red-400"
        }`}
      >
        {txn.type === "income" ? "+" : "-"}${txn.amount}
      </td>

      <td className='px-6 py-4 whitespace-nowrap'>
        {new Date(txn.date).toLocaleDateString()}
      </td>

      {user.role === "admin" && (
        <td className='px-6 py-4'>
          <button className="mr-2 text-blue-500">Edit</button>
          <button
            className="text-red-500 cursor-pointer"
            onClick={() => handleDelete(txn.id)}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default TransactionRow;
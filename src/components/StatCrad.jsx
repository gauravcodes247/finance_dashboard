const StatCard = ({ title, amount, change }) => {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white shadow-sm rounded-2xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700'>
      <h3 className='text-sm font-semibold text-gray-600 dark:text-white'>{title}</h3>
      <p className='text-3xl font-bold'>${amount}</p>
      <p className='text-sm text-gray-500 dark:text-white'>{change}</p>
    </div>
  );
};

export default StatCard;
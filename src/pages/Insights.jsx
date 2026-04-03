import React from "react";
import { useOutletContext } from "react-router-dom";

const Insights = () => {

  const { data } = useOutletContext();

  
  const categoryMap = {};
  data.forEach((txn) => {
    if (txn.type === "expense") {
      if (!categoryMap[txn.category]) {
        categoryMap[txn.category] = 0;
      }
      categoryMap[txn.category] += Number(txn.amount);
    }
  });

  const highestCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];


  const income = data
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = data
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  
  let observation = "";
  if (expenses > income) {
    observation = "You're spending more than you earn ⚠️";
  } else if (expenses > income * 0.7) {
    observation = "Your expenses are quite high 📊";
  } else {
    observation = "Great! You're saving well 💰";
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold dark:text-white">Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Highest Category */}
        <div className="bg-white dark:bg-gray-800 dark:text-white shadow-sm  rounded-2xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 dark:text-gray-200">Highest Spending</h3>
          <p className="text-xl font-bold mt-2">
            {highestCategory ? highestCategory[0] : "No data"}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            ${highestCategory ? highestCategory[1] : 0}
          </p>
        </div>

        {/* Income vs Expense */}
        <div className="bg-white dark:bg-gray-800 dark:text-white shadow-sm  rounded-2xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 dark:text-gray-200">Income vs Expenses</h3>
          <p className="text-lg mt-2">
            Income: <span className="text-green-700 dark:text-green-200 font-semibold">${income}</span>
          </p>
          <p>
            Expenses: <span className="text-red-500 dark:text-red-400 font-semibold">${expenses}</span>
          </p>
        </div>

        {/* Observation */}
        <div className="bg-white dark:bg-gray-800 dark:text-white shadow-sm  rounded-2xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 dark:text-gray-200">Insight</h3>
          <p className="mt-2 text-lg font-medium">{observation}</p>
        </div>

      </div>
    </div>
  );
};

export default Insights;
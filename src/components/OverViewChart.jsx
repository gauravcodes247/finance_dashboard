import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const OverviewChart = ({ data }) => {
  // 🔥 Group by date + calculate net amount
  const chartData = Object.values(
    data.reduce((acc, txn) => {
      const date = new Date(txn.date).toLocaleDateString();

      if (!acc[date]) {
        acc[date] = { date, amount: 0 };
      }

      acc[date].amount +=
        txn.type === "expense"
          ? -Number(txn.amount)
          : Number(txn.amount);

      return acc;
    }, {})
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* Axes */}
        <XAxis dataKey="date" />
        <YAxis />

        {/* Tooltip */}
        <Tooltip formatter={(value) => `$${value}`} />

        {/* Line */}
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#7B60DA"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
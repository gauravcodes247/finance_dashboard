import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const CategoryPieChart = ({ data }) => {
  // 🔥 Group by category (only expenses)
  const categoryData = Object.values(
    data.reduce((acc, txn) => {
      if (txn.type === "expense") {
        if (!acc[txn.category]) {
          acc[txn.category] = { name: txn.category, value: 0 };
        }
        acc[txn.category].value += Number(txn.amount);
      }
      return acc;
    }, {})
  );

  // 🎨 Minimal color palette (soft + premium)
  const COLORS = [
    "#818CF8", // soft indigo
    "#34D399", // soft green
    "#FBBF24", // soft amber
    "#FB7185", // soft rose
  ];

  // 🧠 Custom label inside
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="600"
    >
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}   // 🔥 donut banata hai
          outerRadius={100}
          paddingAngle={3}
          label={renderLabel} // % inside
           labelLine={false}
        >
          {categoryData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </Pie>

        {/* Tooltip */}
        <Tooltip formatter={(value) => `$${value}`} />

        {/* Legend */}
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;
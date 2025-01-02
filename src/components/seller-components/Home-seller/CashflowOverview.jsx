import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", cashflow: 1000 },
  { month: "Feb", cashflow: 3000 },
  { month: "Mar", cashflow: 2000 },
  { month: "Apr", cashflow: 4000 },
  { month: "May", cashflow: 1000 },
  { month: "Jun", cashflow: 2000 },
  { month: "Jul", cashflow: 3000 },
  { month: "Aug", cashflow: 2000 },
  { month: "Sep", cashflow: 4000 },
  { month: "Oct", cashflow: 3500 },
  { month: "Nov", cashflow: 3000 },
  { month: "Dec", cashflow: 4000 },
];

const CashflowOverview = () => {
  return (
    <div className="p-6 bg-white  rounded-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Cashflow Overview</h2>
        <p className="text-green-600 font-semibold">+$100.00</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cashflow" fill="#63C3BE" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashflowOverview;

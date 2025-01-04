"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { name: "Jan", TotalProducts: 400, amt: 2400 },
  { name: "Feb", TotalProducts: 300, amt: 2210 },
  { name: "Mar", TotalProducts: 200, amt: 2290 },
  { name: "Apr", TotalProducts: 278, amt: 2000 },
  { name: "May", TotalProducts: 189, amt: 2181 },
  { name: "Jun", TotalProducts: 239, amt: 2500 },
  { name: "Jul", TotalProducts: 349, amt: 2100 },
  { name: "Aug", TotalProducts: 200, amt: 2290 },
  { name: "Sep", TotalProducts: 278, amt: 2000 },
  { name: "Oct", TotalProducts: 189, amt: 2181 },
  { name: "Nov", TotalProducts: 239, amt: 2500 },
  { name: "Dec", TotalProducts: 349, amt: 2100 },
];

const weeklyData = [
  { name: "Week 1", TotalProducts: 50, amt: 600 },
  { name: "Week 2", TotalProducts: 70, amt: 750 },
  { name: "Week 3", TotalProducts: 40, amt: 520 },
  { name: "Week 4", TotalProducts: 65, amt: 670 },
];

export default function Charts({ timeRange = "months" }) {
  // Use data based on time range
  const data = timeRange === "weeks" ? weeklyData : monthlyData;

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalProducts" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

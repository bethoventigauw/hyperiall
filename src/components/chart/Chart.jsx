import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";

const data = [
  {
    name: "January",
    Purchases: 4000,
    Sales: 2400,
    amt: 2400,
  },
  {
    name: "February",
    Purchases: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Purchases: 2000,
    Sales: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Purchases: 2780,
    Sales: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Purchases: 1890,
    Sales: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Purchases: 2390,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Purchases: 3490,
    Sales: 4300,
    amt: 2100,
  },
];
const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">Summary</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={730}
          height={250}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          data={data}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="gray"
            className="chatGrid"
          />
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar dataKey="Purchases" fill="#BBE1FA" />
          <Bar dataKey="Sales" fill="#0F4C75" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";
const data = [
  { name: "Sunday", user: 50, pv: 2400, amt: 2400 },
  { name: "Monday", user: 100, pv: 2400, amt: 2400 },
  { name: "Tuesday", user: 150, pv: 2400, amt: 2400 },
  { name: "Wednesday", user: 200, pv: 2400, amt: 2400 },
  { name: "Thursday", user: 250, pv: 2400, amt: 2400 },
  { name: "Friday", user: 400, pv: 2400, amt: 2400 },
];
const data1 = [
  { name: "Jan", Adds: 70, pv: 2400, amt: 2400 },
  { name: "Feb", Adds: 130, pv: 2400, amt: 2400 },
  { name: "Mar", Adds: 20, pv: 2400, amt: 2400 },
  { name: "Apr", Adds: 80, pv: 2400, amt: 2400 },
  { name: "May", Adds: 50, pv: 2400, amt: 2400 },
  { name: "Jun", Adds: 40, pv: 2400, amt: 2400 },
  { name: "July", Adds: 100, pv: 2400, amt: 2400 },
  { name: "Aug", Adds: 120, pv: 2400, amt: 2400 },
];
const data2 = [
  { name: "Jan", Deleted: 70, pv: 2400, amt: 2400 },
  { name: "Feb", Deleted: 130, pv: 2400, amt: 2400 },
  { name: "Mar", Deleted: 20, pv: 2400, amt: 2400 },
  { name: "Apr", Deleted: 80, pv: 2400, amt: 2400 },
  { name: "May", Deleted: 50, pv: 2400, amt: 2400 },
  { name: "Jun", Deleted: 40, pv: 2400, amt: 2400 },
  { name: "July", Deleted: 100, pv: 2400, amt: 2400 },
  { name: "Aug", Deleted: 120, pv: 2400, amt: 2400 },
];

const OverView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="bg-base-200 w-fit px-4 py-2 rounded-2xl">
        <h1 className="mb-5">Every Day Viewers</h1>
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="user" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
      <div className="bg-base-200 w-fit px-4 py-2 rounded-2xl">
        <h1 className="mb-5">Added Groups Monthly</h1>
        <LineChart width={300} height={200} data={data1}>
          <CartesianGrid />
          <Tooltip />
          <Line dataKey="Adds" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </LineChart>
      </div>
      <div className="bg-base-200 w-fit px-4 py-2 rounded-2xl">
        <h1 className="mb-5">Deleted Groups Monthly</h1>
        <LineChart width={300} height={200} data={data2}>
          <CartesianGrid />
          <Tooltip />
          <Line dataKey="Deleted" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default OverView;

import React, { useEffect, useState } from "react";
import OverView from "../DashComponents/OverView";
import { Fa42Group, FaUser, FaUserGroup } from "react-icons/fa6";
import { MdGroupAdd, MdGroupRemove } from "react-icons/md";
import LoginInformation from "../DashComponents/LoginInformation";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(
      "https://hobby-hub-server-h7oib83zw-parvezreza55s-projects.vercel.app/user"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="space-y-5 mt-4">
      {/* stats  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-base-200 px-10 py-3 rounded-2xl w-fit ">
          <h1 className="font-semibold opacity-60 my-2">Total users</h1>
          <div className="flex justify-evenly items-center">
            <h1 className="font-extrabold text-3xl">{users.length}</h1>
            <FaUser size={20}></FaUser>
          </div>
          <h1 className="text-xs opacity-60">3% more than last month</h1>
        </div>
        {/* card 2  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl w-fit ">
          <h1 className="font-semibold opacity-60 my-2">Total Groups</h1>
          <div className="flex justify-evenly items-center">
            <h1 className="font-extrabold text-3xl">400+</h1>
            <FaUserGroup size={20} />
          </div>
          <h1 className="text-xs opacity-60">30% more than last month</h1>
        </div>
        {/* card 3  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl w-fit ">
          <h1 className="font-semibold opacity-60 my-2">Total Added Groups</h1>
          <div className="flex justify-evenly items-center">
            <h1 className="font-extrabold text-3xl">200+</h1>
            <MdGroupAdd size={20} />
          </div>
          <h1 className="text-xs opacity-60">20% more than last month</h1>
        </div>
        {/* card 4  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl w-fit ">
          <h1 className="font-semibold opacity-60 my-2">
            Total Deleted Groups
          </h1>
          <div className="flex justify-evenly items-center">
            <h1 className="font-extrabold text-3xl">100+</h1>
            <MdGroupRemove size={20} />
          </div>
          <h1 className="text-xs opacity-60">3% more than last month</h1>
        </div>
      </div>
      <div>
        {/* <OverView></OverView> */}
        <LoginInformation></LoginInformation>
      </div>
    </div>
  );
};

export default Dashboard;

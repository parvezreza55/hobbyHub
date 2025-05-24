import React from "react";
import CountUp from "react-countup";

const VisitedUser = () => {
  return (
    <div className="w-11/12 mx-auto  py-20 mb-10">
      <h1 className="text-center text-xl md:text-3xl font-bold my-10">
        Our users
      </h1>
      <div className=" flex justify-around bg-base-200 rounded-2xl shadow-xl px-10 py-12">
        <div className="text-xl md:text-4xl font-bold">
          <h1 className="text-teal-400 py-3"> Users</h1>
          <CountUp end={1000}></CountUp>+
        </div>
        <div className="text-xl md:text-4xl font-bold">
          <h1 className="text-teal-400 py-3"> Created Group</h1>
          <CountUp end={2000}></CountUp>+
        </div>
        <div className="text-xl md:text-4xl font-bold">
          <h1 className="text-teal-400 py-3"> Update Group Data</h1>
          <CountUp end={500}></CountUp>+
        </div>
      </div>
    </div>
  );
};

export default VisitedUser;

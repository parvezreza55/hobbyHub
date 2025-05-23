import React from "react";
import { useLoaderData } from "react-router";
import AllCard from "./AllCard";

const AllGroup = () => {
  const groups = useLoaderData();
  //   console.log(groups);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10">
        All Groups
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-20 gap-6">
        {groups.map((group) => (
          <AllCard key={group._id} group={group}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;

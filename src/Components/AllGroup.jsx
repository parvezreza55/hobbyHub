import React, { useEffect, useState } from "react";
import AllCard from "./AllCard";

const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    let url = "http://localhost:3000/hobbies";
    const params = [];
    if (sortOrder) params.push(`sort=${sortOrder}`);
    if (filter) params.push(`category=${filter}`);
    if (params.length > 0) url += `?${params.join("&")}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, [filter, sortOrder]);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10">
        All Groups
      </h1>
      <div className="flex justify-end gap-4">
        <div>
          <select
            className="select select-bordered"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div>
          <select
            className="select select-bordered"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Category</option>
            <option value="drawing">Drawing & Painting</option>
            <option value="photography">Photography</option>
            <option value="video">Video Gaming</option>
            <option value="fishing">Fishing</option>
            <option value="running">Running</option>
            <option value="cooking">Cooking</option>
            <option value="reading">Reading</option>
            <option value="writing">Writing</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-20 gap-6">
        {groups.map((group) => (
          <AllCard key={group._id} group={group}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;

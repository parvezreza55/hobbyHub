import React, { useEffect, useState } from "react";

import AllCard from "../../Components/AllCard";
import { AuthContext } from "../../Context/AuthContext";

const DashAllgroup = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/hobbies")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto pb-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-7 ">
        All Group
      </h1>
      <div className="border rounded-2xl py-3 shadow-2xl">
        <table className="table w-11/12 ">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Sl.No.</label>
              </th>
              <th>Group Name</th>
              <th className="hidden md:flex">Photo</th>
              <th className="text-end">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {groups.map((group, index) => (
              <tr key={group._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td className="font-semibold">{group.name}</td>
                <td className="hidden md:flex">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={group.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{group.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center font-bold">{group.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashAllgroup;

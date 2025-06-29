import React, { useEffect, useState } from "react";

const LoginInformation = () => {
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
    <div className="w-11/12 mx-auto pb-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-7 ">
        Users Data
      </h1>
      <div className="border rounded-2xl py-3 shadow-2xl">
        <table className="table w-11/12 ">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Sl.No.</label>
              </th>
              <th>Name</th>
              <th className="hidden md:flex">Photo</th>
              <th className="text-center">Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td className="font-semibold">{user.displayName}</td>
                <td className="hidden md:flex">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-center">{user.email}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginInformation;

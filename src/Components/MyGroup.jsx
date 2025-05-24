import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { HiDocumentDownload } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyGroup = () => {
  const mydatas = useLoaderData();
  const { user } = use(AuthContext);
  const hobbies = mydatas.filter((hobby) => hobby.email === user.email);
  const [mydata, setHobbies] = useState(hobbies);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/hobbies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        //  remaining
        const remainingHobbies = mydata.filter((hob) => hob._id !== id);
        setHobbies(remainingHobbies);
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto pb-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-7 ">
        My Group
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
              <th className="text-end">Options</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mydata.map((hobby, index) => (
              <tr key={hobby._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td className="font-semibold">{hobby.name}</td>
                <td className="hidden md:flex">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={hobby.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{hobby.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-end">
                  <div className="join join-vertical lg:join-horizontal space-x-3 space-y-3 lg:space-y-0">
                    <button className="cursor-pointer join-item">
                      <Link to={`/my-group/${hobby._id}`}>
                        <HiDocumentDownload size={25} />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(hobby._id)}
                      className="cursor-pointer join-item"
                    >
                      <MdDelete size={25} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroup;

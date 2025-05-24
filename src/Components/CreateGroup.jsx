import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const CreateGroup = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = use(AuthContext);

  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("date", startDate.toISOString().slice(0, 10));
    const groupData = Object.fromEntries(formData.entries());
    // fecth data
    fetch("http://localhost:3000/hobbies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold my-10">
        Create Your Group
      </h1>
      <form onSubmit={handleCreate}>
        <div className="grid dark:text-black grid-cols-1 md:grid-cols-2 gap-6 mt-7">
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Group Name</label>
            <input
              type="text"
              required
              name="name"
              className="input w-full dark:bg-white"
              placeholder="Group Name"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Hobby Category</label>
            <select
              name="category"
              required
              defaultValue="Select a category"
              className="select w-full dark:bg-white"
            >
              <option disabled={true}>Select a category</option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing </option>
              <option>Gardening </option>
              <option>Singing </option>
            </select>
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full dark:bg-white"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Meeting Location</label>
            <input
              type="text"
              name="address"
              className="input w-full dark:bg-white"
              placeholder="Meeting Location"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Max Members</label>
            <input
              type="text"
              name="members"
              className="input w-full dark:bg-white"
              placeholder="Max Members"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">End Date</label>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input w-full dark:bg-white"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Image URL</label>
            <input
              type="text"
              required
              name="photoURL"
              className="input w-full dark:bg-white"
              placeholder="Group Name"
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">User Name </label>
            <input
              type="text"
              value={user.displayName}
              name="userName"
              className="input w-full dark:bg-white"
              placeholder="User Name "
            />
          </fieldset>
          <fieldset className="fieldset dark:bg-gray-200 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              value={user.email}
              name="email"
              className="input w-full dark:bg-white"
              placeholder="User Email"
            />
          </fieldset>
        </div>
        <div>
          <button
            type="submit"
            className="btn w-full bg-gray-700 dark:bg-gray-500 text-white my-7"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;

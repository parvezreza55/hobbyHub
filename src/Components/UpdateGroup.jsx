import React from "react";

const UpdateGroup = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold my-10">
        Create Your Group
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Group Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Group Name"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Hobby Category</label>
          <select defaultValue="Select a category" className="select w-full">
            <option disabled={true}>Select a category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing </option>
          </select>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            className="input w-full"
            placeholder="Description"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Meeting Location</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Meeting Location"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Max Members</label>
          <input
            type="text"
            name="members"
            className="input w-full"
            placeholder="Max Members"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Start Date</label>
          <input
            type="text"
            name="date"
            className="input w-full"
            placeholder="Start Date"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Image URL</label>
          <input
            type="text"
            name="photoURL"
            className="input w-full"
            placeholder="Group Name"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">User Name </label>
          <input
            type="text"
            name="userName"
            className="input w-full"
            placeholder="User Name "
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">User Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="User Email"
          />
        </fieldset>
      </div>
      <div>
        <button className="btn w-full bg-gray-700 text-white my-7">
          Create
        </button>
      </div>
    </div>
  );
};

export default UpdateGroup;

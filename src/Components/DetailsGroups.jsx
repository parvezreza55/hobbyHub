import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const DetailsGroups = () => {
  const details = useLoaderData();
  const [isDisable, setDisable] = useState(false);
  const { name, category, date, photoURL, members, address, description } =
    details;
  const handleJoin = () => {
    const times = new Date();
    const newTimes = times.toISOString().slice(0, 10);
    const dates = date.slice(0, 10);
    if (newTimes <= dates) {
      setDisable(false);
      Swal.fire({
        title: "Successfully Joined",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Deadline Over",
      });
      setDisable(true);
    }
  };
  //   console.log(details);
  return (
    <div className="card bg-base-100 dark:bg-white dark:text-black  w-11/12 md:w-9/12 mx-auto shadow-sm border my-20">
      <figure className="px-10 pt-10">
        <img
          src={photoURL}
          alt="Shoes"
          className="rounded-2xl h-[20em] md:h-[30em] w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="opacity-60">{description}</p>
        <div className="grid grid-cols-2 gap-7 text-xs md:text-lg font-semibold text-left">
          <p>Hobby Category: {category}</p>
          <p>Max Members: {members}</p>
          <p>Meeting Location: {address}</p>
          <p>Start Date: {date}</p>
        </div>
        <div className="card-actions">
          <button
            disabled={isDisable}
            onClick={handleJoin}
            className={`${
              isDisable
                ? "opacity-50 cursor-not-allowed p-3 rounded-2xl text-white bg-gray-700"
                : "p-3 rounded-2xl bg-gray-700 text-white"
            }`}
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsGroups;

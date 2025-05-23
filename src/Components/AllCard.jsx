import React from "react";

const AllCard = ({ group }) => {
  console.log(group);
  const { description, name, photoURL } = group;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-sm">
        <figure>
          <img
            className="object-cover rounded-t-2xl h-[20em]"
            src={photoURL}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-gray-600 text-white">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;

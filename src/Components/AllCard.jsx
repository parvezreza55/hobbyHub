import React from "react";
import { Link } from "react-router";
import defaultImg from "../assets/images/tavell.jpg";

const AllCard = ({ group }) => {
  //   console.log(group);
  const { description, name, photoURL, _id } = group;
  return (
    <div>
      <div className="card h-full bg-base-100 dark:bg-white dark:text-black shadow-sm">
        <figure>
          <img
            className="object-cover h-[20em]"
            src={photoURL ? photoURL : defaultImg}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-gray-600 text-white">
              <Link to={`/allgroup/${_id}`}>See More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;

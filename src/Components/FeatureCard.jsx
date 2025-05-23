import React from "react";
import { Link } from "react-router";

const FeatureCard = ({ feature }) => {
  const { description, name, photoURL, _id } = feature;

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
            <button className="btn bg-gray-600 text-white">
              {" "}
              <Link to={`/allgroup/${_id}`}>See More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

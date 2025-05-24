import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const FeatureCard = ({ feature, index }) => {
  const { description, name, photoURL, _id } = feature;

  return (
    <div>
      <Fade direction="up" delay={index * 100} triggerOnce={true}>
        <div className="card h-full dark:bg-white dark:text-black bg-base-100 shadow-sm">
          <figure>
            <img className="object-cover h-[20em]" src={photoURL} alt="" />
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
      </Fade>
    </div>
  );
};

export default FeatureCard;

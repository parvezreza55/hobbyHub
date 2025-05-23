import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = ({ hobbyData }) => {
  const times = new Date();
  const newTimes = times.toISOString().slice(0, 10);

  const ongoing = hobbyData.filter(
    (hobby) => hobby.date.slice(0, 10) >= newTimes
  );
  const ongoingFeature = ongoing.slice(0, 6);
  console.log(ongoingFeature);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-10">
        All Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-20 gap-6">
        {ongoingFeature.map((feature) => (
          <FeatureCard key={feature._id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;

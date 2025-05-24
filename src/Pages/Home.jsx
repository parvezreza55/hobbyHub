import React from "react";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import { useLoaderData } from "react-router";
import Footer from "../Components/Footer";
import Riview from "../Components/Riview";
import VisitedUser from "../Components/VisitedUser";

const Home = () => {
  const hobbyData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Feature hobbyData={hobbyData}></Feature>
      <Riview></Riview>
      <VisitedUser></VisitedUser>
    </div>
  );
};

export default Home;

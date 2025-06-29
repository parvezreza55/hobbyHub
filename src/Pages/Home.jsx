import React from "react";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import { useLoaderData } from "react-router";
import Footer from "../Components/Footer";
import Riview from "../Components/Riview";
import VisitedUser from "../Components/VisitedUser";
import AboutUs from "../Components/AboutUs";

const Home = () => {
  const hobbyData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Feature hobbyData={hobbyData}></Feature>
      <Riview></Riview>
      <VisitedUser></VisitedUser>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;

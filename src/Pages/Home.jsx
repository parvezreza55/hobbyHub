import React from "react";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import { useLoaderData } from "react-router";
import Footer from "../Components/Footer";

const Home = () => {
  const hobbyData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Feature hobbyData={hobbyData}></Feature>
    </div>
  );
};

export default Home;

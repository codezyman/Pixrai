import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Features from "../components/Features";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Features />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;

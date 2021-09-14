import React from "react";
import Header from "../../components/Header/Header";
import Banner1 from "../../components/Banner1/Banner";
import Banner2 from "../../components/Banner2/Banner2";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner1 />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;

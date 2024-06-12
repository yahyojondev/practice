import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Time from "../../components/time/Time";
import Trade from "../../components/trade/Trade";
import Trade__one from "../../components/tradeone/Trade__one";
import Choose from "../../components/choose/Choose";
import Credit from "../../components/credit/Credit";
import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Time />
      <Trade />
      <Trade__one />
      <Choose />
      <Credit />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;

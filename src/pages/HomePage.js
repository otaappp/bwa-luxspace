import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/BrowseRoom";
import JustArrived from "../parts/JustArrived";
import Clients from "../parts/Clients";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}

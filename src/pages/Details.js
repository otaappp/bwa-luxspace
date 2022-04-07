import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/ProductDetails";
import Suggestion from "../parts/Suggestion";
// import BrowseRoom from "../parts/BrowseRoom";
// import JustArrived from "../parts/JustArrived";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";

export default function Details(props) {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/9713", name: "Office Room" },
          { url: "/categories/9713/products/7931", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <SiteMap />
      <Footer />
    </>
  );
}

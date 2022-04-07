import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ShoppingCart from "../parts/ShoppingCart";
import ShippingDetails from "../parts/ShippingDetails";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";

export default function Details(props) {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <SiteMap />
      <Footer />
    </>
  );
}

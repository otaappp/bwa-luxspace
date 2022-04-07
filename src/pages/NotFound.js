import React from "react";

import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";
import PageErrorMassage from "../parts/PageErrorMassage";
export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMassage />
      <SiteMap />
      <Footer />
    </>
  );
}

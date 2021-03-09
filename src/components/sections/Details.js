import React from "react";
import Layout from "../../Layout";
import DetailFeature from "../DetailFeature";

const Details = () => (
  <div className="my-16">
    <Layout>
      <DetailFeature />
      <DetailFeature right />
      <DetailFeature />
    </Layout>
  </div>
);

export default Details;

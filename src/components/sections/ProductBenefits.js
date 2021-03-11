import React from "react";
import ProductBenefitCard from "../ProductBenefitCard";
import Layout from "../../Layout";

const ProductBenefits = () => {
  const products = [
    {
      id: 1,
      title: "First main product benefit",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-settings.png",
    },
    {
      id: 2,
      title: "Second main product benefit",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-star.png",
    },
    {
      id: 3,
      title: "Third main product benefit",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-idea.png",
    },
    {
      id: 4,
      title: "Fourth main product benefit",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-user.png",
    },
    {
      id: 5,
      title: "Another Claim",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-idea.png",
    },
    {
      id: 6,
      title: "Another Claim",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-user.png",
    },
    {
      id: 7,
      title: "Another Claim",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-star.png",
    },
    {
      id: 8,
      title: "Another Claim",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-star.png",
    },
    {
      id: 9,
      title: "Free migration",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-settings.png",
    },
    {
      id: 10,
      title: "Useful Integration",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-star.png",
    },
    {
      id: 11,
      title: "Awesome support",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-idea.png",
    },
    {
      id: 12,
      title: "Full refund",
      subTitle: "Short text to support claim",
      imageURL:
        "https://www.landingkit.com/templates/saasfolio/tailwind/img/icon-user.png",
    },
  ];
  return (
    <div className="bg-custom-lightBlue py-16">
      <Layout>
        <div className="font-bold text-3xl my-8 text-center">
          Summarize your main products benefits
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <ProductBenefitCard
                title={product.title}
                subTitle={product.subTitle}
                imageURL={product.imageURL}
              />
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default ProductBenefits;

import React from "react";
import HeroSection from "./HeroSection";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy the Iphone 15 Pro"
        subtitle="Experience cutting edge technology of the new Iphone 15 with teh best pro camero"
        link="/products/652d84b5c7c0b3160da7f6e2"
        image={iphone}
      />

      <FeaturedProducts />

      <HeroSection
        title="Build the Ultimate Pro Setup!"
        subtitle="You can add Studio Display and colour-matched Magic acessories to your bag after you configure your Mac Mini"
        link="/products/652d84b5c7c0b3160da7f6ea"
        image={mac}
      />
    </div>
  );
};

export default HomePage;

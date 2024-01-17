"use client";

import OfferCard from "./OfferCard/OfferCard";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default HeroSection;

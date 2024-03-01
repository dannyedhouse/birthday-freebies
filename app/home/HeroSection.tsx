"use client";

import { offer } from "../lib/types/offerInterface";
import OfferCard from "./OfferCard/OfferCard";

type Props = { data: offer[] };

const HeroSection = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {props.data.map((offer, idx) => (
          <OfferCard key={idx} data={offer} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

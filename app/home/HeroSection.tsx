"use client";

import Dropdown, { DropdownOption } from "@/components/Dropdown/Dropdown";
import Image from "next/image";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaCocktail } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { GiAmpleDress, GiHamburger } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdMore } from "react-icons/md";
import OfferCard from "../../components/OfferCard/OfferCard";
import { Offer } from "../lib/types/OfferInterface";
type Props = { data: Offer[] };

const options: DropdownOption[] = [
  { name: "All categories", icon: <BiCategory /> },
  { name: "Food", icon: <GiHamburger /> },
  { name: "Drinks", icon: <FaCocktail /> },
  { name: "Clothing", icon: <GiAmpleDress /> },
  { name: "Beauty", icon: <FaPaintbrush /> },
  { name: "Other", icon: <MdMore /> },
];

const HeroSection = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(options[0]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleFreebiesClick = () => {
    setSelectedTag((prevTag) => (prevTag === "freebie" ? null : "freebie"));
  };

  const handleDiscountsClick = () => {
    setSelectedTag((prevTag) => (prevTag === "discount" ? null : "discount"));
  };

  const resetFilters = () => {
    setSelectedCategory(options[0]);
    setSelectedTag(null);
  };

  const filteredOffers = props.data.filter((offer) => {
    if (selectedCategory.name === "All categories" && !selectedTag) {
      return true;
    } else if (selectedCategory.name === "All categories") {
      return offer.tag === selectedTag;
    } else {
      return (
        offer.category === selectedCategory.name.toLowerCase() &&
        (!selectedTag || offer.tag === selectedTag)
      );
    }
  });

  return (
    <>
      <div className="inline-flex gap-4 mb-6 bg-primary">
        <Dropdown
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          options={options}
        />
        <button
          onClick={handleFreebiesClick}
          className={` font-raleway mt-1 pl-4 pr-4 rounded-lg hover:bg-teal-200 border-teal-600 border-2 " ${
            selectedTag === "freebie"
              ? "bg-teal-200 border-solid"
              : "bg-white bg-opacity-40 border-dashed"
          }`}
        >
          <span className="flex items-center gap-2">
            Freebies
            {selectedTag === "freebie" ? <IoMdClose /> : null}
          </span>
        </button>
        <button
          onClick={handleDiscountsClick}
          className={` font-raleway mt-1 pl-4 pr-4 rounded-lg hover:bg-red-200 border-red-600 border-2 " ${
            selectedTag === "discount"
              ? "bg-red-200 border-solid"
              : "bg-white bg-opacity-40 border-dashed"
          }`}
        >
          <span className="flex items-center gap-2">
            Discounts
            {selectedTag === "discount" ? <IoMdClose /> : null}
          </span>
        </button>
      </div>

      {filteredOffers.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredOffers.map((offer, idx) => (
            <OfferCard key={idx} data={offer} />
          ))}
        </div>
      ) : (
        <div className="flex items-center w-full justify-between">
          <div>
            <p className=" bg-primary font-raleway text-2xl h-fit mb-2">
              <i>No freebies or deals found 💔</i>
            </p>
            <button
              className="bg-brand-red hover:scale-105 px-4 py-1 rounded text-white font-raleway font-medium"
              onClick={resetFilters}
            >
              <span className="flex gap-2 justify-center">
                Clear all filters
              </span>
            </button>
          </div>
          <Image
            priority
            className="hidden md:block justify-self-end"
            src={"/no-data.webp"}
            alt="404 image"
            height={650}
            width={450}
          />
        </div>
      )}
    </>
  );
};

export default HeroSection;

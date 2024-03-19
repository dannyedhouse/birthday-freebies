import { urlFor } from "@/app/lib/sanity";
import { offer } from "@/app/lib/types/offerInterface";
import Image from "next/image";
import Link from "next/link";
import { FaShop } from "react-icons/fa6";
import OfferBadge from "../OfferBadge/OfferBadge";

type OfferCardProps = { data: offer };

const OfferCard = (props: OfferCardProps) => {
  const offer = props.data;

  return (
    <div className="relative flex flex-col">
      <Image
        src={
          offer.image
            ? urlFor(offer.image).width(600).height(400).url()
            : "https://placehold.co/600x400.png"
        }
        alt={offer.retailer + " brand image"}
        width={600}
        height={400}
        className="w-full object-center rounded-lg shadow-md"
        priority
      />

      {offer.logo ? (
        <Image
          src={urlFor(offer.logo).width(100).height(40).url()}
          alt={offer.retailer + " logo"}
          width={100}
          height={40}
          className="absolute top-0 right-0 p-2 bg-white"
          priority
        />
      ) : null}

      <div className="flex-grow relative -mt-16 px-5">
        <div className="bg-white rounded-lg shadow-lg p-4 h-full relative pb-12">
          <div className="flex items-baseline -ml-2 justify-between">
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold flex gap-1 items-center">
              <FaShop />
              {offer.retailer}
            </div>
            <OfferBadge tag={offer.tag} />
          </div>

          {/**Deal/offer card front*/}
          <div>
            <h4 className="text-lg font-semibold mt-1">{offer.heading}</h4>
            <p className="text-sm pb-2">{offer.dealSummary}</p>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex items-center flex-wrap justify-between relative">
                <a
                  className="underline text-blue-400 hover:text-blue-600"
                  href="#"
                >
                  T&Cs
                </a>
                <Link href={offer.url} target="_blank" rel="noreferrer">
                  <button className="bg-brand-red hover:scale-105 px-4 py-1 rounded text-white font-raleway font-medium">
                    <span className="flex gap-2 justify-center">
                      Get Freebie
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/**Deal/offer card back T&Cs*/}
          <div>
            <h5 className="text-md font-semibold mt-1">Terms and Conditions</h5>
            <p className="text-xs text-gray-500">{offer.dealTerms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

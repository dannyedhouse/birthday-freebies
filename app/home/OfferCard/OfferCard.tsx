import { urlFor } from "@/app/lib/sanity";
import { offer } from "@/app/lib/types/offerInterface";
import Image from "next/image";
import { FaShop } from "react-icons/fa6";
import OfferBadge from "../OfferBadge/OfferBadge";

type Props = { data: offer };

const OfferCard = (props: Props) => {
  const offer = props.data;

  return (
    <div>
      <Image
        src={
          offer.image
            ? urlFor(offer.image).url()
            : "https://placehold.co/600x400.png"
        }
        alt="placeholder image"
        width={500}
        height={500}
        className="w-full object-cover object-center rounded-lg shadow-md"
        priority
      />

      <div className="flex-grow relative -mt-16 px-5">
        <div className="bg-white rounded-lg shadow-lg p-4 h-full">
          <div className="flex items-baseline -ml-2 justify-between">
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold flex gap-1">
              <FaShop />
              {offer.retailer}
            </div>
            <OfferBadge tag={offer.tag} />
          </div>
          <h4 className="text-lg font-semibold mt-1">{offer.heading}</h4>

          <p className="text-sm">{offer.dealSummary}</p>

          {/* <PortableText value={offer.content} /> */}
          <div className="flex items-center flex-wrap justify-between">
            <a
              className="underline text-blue-400 hover:text-blue-600"
              href="https://"
            >
              T&Cs
            </a>
            <button className="bg-red hover:scale-105 px-4 py-1 rounded text-white font-raleway font-medium">
              <span className="flex gap-2 justify-center">
                {/* <FaGifts /> */}
                Get Freebie
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

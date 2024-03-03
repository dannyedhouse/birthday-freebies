import { urlFor } from "@/app/lib/sanity";
import { offer } from "@/app/lib/types/offerInterface";
import Image from "next/image";
import { FaShop } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import OfferBadge from "../OfferBadge/OfferBadge";

type Props = { data: offer };

const OfferCard = (props: Props) => {
  const offer = props.data;

  return (
    <div>
      <Image
        src={urlFor(offer.image).url()}
        alt="placeholder image"
        width={500}
        height={500}
        className="w-full object-cover object-center rounded-lg shadow-md"
        priority
      />

      <div className="relative -mt-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <HiExternalLink />
          <div className="flex items-baseline -ml-2 justify-between">
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold flex gap-1">
              <FaShop />
              {offer.retailer}
            </div>
            <OfferBadge tag={offer.tag} />
          </div>
          <h4 className="text-xl font-semibold mt-1">{offer.heading}</h4>
          {/* <PortableText value={offer.content} /> */}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

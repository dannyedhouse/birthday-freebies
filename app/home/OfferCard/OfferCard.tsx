import Image from "next/image";
import { FaShop } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import OfferBadge from "../OfferBadge/OfferBadge";

const OfferCard = () => {
  return (
    <div>
      <Image
        src="/doughnuts.jpg"
        alt="placeholder image"
        width={500}
        height={500}
        className="w-full object-cover object-center rounded-lg shadow-md"
      />

      <div className="relative -mt-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <HiExternalLink />
          <div className="flex items-baseline -ml-2 justify-between">
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold flex gap-1">
              <FaShop />
              Costa Coffee
            </div>
            <OfferBadge type="freebie" />
          </div>
          <h4 className="text-xl font-semibold mt-1">Free Doughnut</h4>
          <ul>
            <li>Sign up to the Retailer Reward App</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

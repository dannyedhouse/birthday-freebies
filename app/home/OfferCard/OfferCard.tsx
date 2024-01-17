import Image from "next/image";

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
          <div className="flex items-baseline">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold">
              Freebie
            </span>
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold">
              Retailer
            </div>
          </div>
          <h4 className="text-xl font-semibold uppercase">Free Doughnut</h4>
          <ul>
            <li>Sign up to the Retailer Reward App</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

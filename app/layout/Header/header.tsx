import Image from "next/image";
import { FaRegPenToSquare } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 sm:py-10 gap-8">
      <a href="/" className="flex">
        <Image src="/logo.svg" width={350} height={400} alt="logo" />
      </a>

      <button className="bg-brand-yellow hover:scale-105 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <FaRegPenToSquare />
        <span className="hidden sm:block px-2 font-raleway">
          Suggest a freebie
        </span>
      </button>
    </div>
  );
};

export default Header;

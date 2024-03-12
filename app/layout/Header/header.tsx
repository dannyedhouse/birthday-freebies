import { SuggestionModal } from "@/app/home/Modal/SuggestionModal";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 sm:py-10 gap-8">
      <a href="/" className="flex">
        <Image src="/logo.svg" width={350} height={400} alt="logo" />
      </a>
      <SuggestionModal />
    </div>
  );
};

export default Header;

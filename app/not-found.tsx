import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col mt-10 gap-4 text-center sm:text-left mb-10">
        <h1 className="font-raleway font-bold text-2xl sm:text-5xl">
          Oops, that page does not exist.
        </h1>
        <Link href="/">
          <button className="bg-brand-red hover:scale-105 px-4 py-1 rounded text-white font-raleway font-medium">
            <span className="flex gap-2 justify-center">Return Home</span>
          </button>
        </Link>
      </div>
      <Image
        className=""
        src={"/404.webp"}
        alt="404 image"
        height={800}
        width={600}
      />
    </div>
  );
}

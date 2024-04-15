import { client } from "../lib/sanity";
import { Offer } from "../types/OfferInterface";
import HeroSection from "./home/HeroSection";

async function getData() {
  const query = `*[_type == 'deals'] {
    heading,
      retailer,
      tag,
      category,
      "currentSlug": slug.current,
      url,
      image,
      logo,
      content,
      dealSummary,
      dealTerms,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const offerData: Offer[] = await getData();
  const sortedData: Offer[] = offerData.sort(
    (a, b) => a.dealSummary.length - b.dealSummary.length
  );

  return (
    <>
      <HeroSection data={sortedData} />
    </>
  );
}

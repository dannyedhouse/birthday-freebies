import HeroSection from "./home/HeroSection";
import { client } from "./lib/sanity";
import { offer } from "./lib/types/offerInterface";

async function getData() {
  const query = `*[_type == 'deals'] {
    heading,
      retailer,
      tag,
      "currentSlug": slug.current,
      url,
      image,
      content,
      dealSummary,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const offerData: offer[] = await getData();

  return (
    <>
      <HeroSection data={offerData} />
    </>
  );
}

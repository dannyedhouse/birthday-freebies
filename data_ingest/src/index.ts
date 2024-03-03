import axios from "axios";
import cheerio from "cheerio";
import * as dotenv from "dotenv";
import { createClient } from "next-sanity";
dotenv.config();

const url = process.env.DATA_SOURCE_URL;

interface dealData {
  _id: string;
  _type: string;
  title: string;
  heading: string;
  retailer: string;
  tag: string;
  dealSummary: string;
  dealTerms: string;
  url: string;
  popularity: number;
}

export const client = createClient({
  apiVersion: "2024-03-01",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn: false,
});

const axiosInstance = axios.create();
axiosInstance
  .get(url)
  .then((response) => getData(response))
  .then((deals) => {
    let transaction = client.transaction();
    deals.forEach((deal) => {
      transaction.createOrReplace(deal);
    });

    return transaction.commit();
  })

  .catch(console.error);

function getData(response) {
  const html = response.data;
  const $ = cheerio.load(html);
  const dealList = $(".numbers > li");
  const deals: dealData[] = [];

  dealList.each((i, elem) => {
    const retailer: string = $(elem).find("h3").text();
    const url: string = $(elem).find("a").attr("href");
    const logoSrc: string = $(elem).find("img").attr("src");
    const deal: string = $(elem).find("p").text();

    let dealParts: string[];
    let tag: string = "";

    if (deal.includes("Freebie:")) {
      dealParts = deal.split(/Freebie:|How to claim your freebie:|T&Cs:/);
      tag = "freebie";
    } else {
      dealParts = deal.split(
        /Discount:|How to claim your birthday discount:|T&Cs:/
      );
      tag = "discount";
    }

    const heading: string = dealParts[1].replace(".", "");
    const title: string = retailer + " - " + heading;
    const dealSummary: string = dealParts[2];
    const dealTerms: string = dealParts[3];
    const _id: string = String(i);
    const _type: string = "deals";

    const popularity: number = 0;
    deals.push({
      _id,
      _type,
      retailer,
      url,
      title,
      heading,
      dealSummary,
      dealTerms,
      tag,
      popularity,
    });
  });
  return deals;
}
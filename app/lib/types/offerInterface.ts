import { offerTags } from "./offerTags";

export interface offer {
  heading: string;
  retailer: string;
  image: string;
  logo: string;
  tag: offerTags;
  currentSlug: string;
  url: any;
  dealSummary: string;
  dealTerms: string;
}

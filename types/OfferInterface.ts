import { OfferCategory } from "@/types/OfferCategoryType";
import { OfferTags } from "./OfferTags";

export interface Offer {
  heading: string;
  retailer: string;
  image: string;
  logo: string;
  tag: OfferTags;
  currentSlug: string;
  url: string;
  category: OfferCategory;
  dealSummary: string;
  dealTerms: string;
}

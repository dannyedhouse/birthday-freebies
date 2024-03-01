import { offerTags } from "./offerTags";

export interface offer {
  heading: string;
  retailer: string;
  image: string;
  tag: offerTags;
  currentSlug: string;
  url: any;
  content: any;
}

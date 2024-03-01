import { offerTags } from "@/app/lib/types/offerTags";

interface OfferBadgeProps {
  tag: offerTags;
}

const OfferBadge = (props: OfferBadgeProps) => {
  let offerTag, badgeClass;

  switch (props.tag) {
    case "freebie":
      offerTag = "Freebie";
      badgeClass = "bg-teal-200";
      break;
    case "discount":
      offerTag = "Discount";
      badgeClass = "bg-red-200";
      break;
    case "no-app":
      offerTag = "No app needed";
      badgeClass = "bg-cyan-200";
      break;
    case "limited":
      offerTag = "Limited time";
      badgeClass = "bg-amber-200";
      break;
  }

  return (
    <div
      className={`${badgeClass} text--800 text-xs px-2 inline-block rounded-full uppercase font-semibold`}
    >
      {offerTag}
    </div>
  );
};

export default OfferBadge;

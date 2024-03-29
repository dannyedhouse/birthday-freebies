import { OfferTags } from "@/app/lib/types/OfferTags";

interface OfferBadgeProps {
  tag: OfferTags;
}

const OfferBadge = (props: OfferBadgeProps) => {
  let offerTag, badgeClass, badgeTextClass;

  switch (props.tag) {
    case "freebie":
      offerTag = "Freebie";
      badgeClass = "bg-teal-200";
      badgeTextClass = "text-teal-900";
      break;
    case "discount":
      offerTag = "Discount";
      badgeClass = "bg-red-200";
      badgeTextClass = "text-red-900";
      break;
    case "no-app":
      offerTag = "No app needed";
      badgeClass = "bg-cyan-200";
      badgeTextClass = "text-cyan-900";
      break;
    case "limited":
      offerTag = "Limited time";
      badgeClass = "bg-amber-200";
      badgeTextClass = "text-amber-900";
      break;
  }

  return (
    <div
      className={`${badgeClass} text--800 text-xs px-2 rounded-full uppercase font-semibold`}
    >
      <span className={`${badgeTextClass}`}>{offerTag}</span>
    </div>
  );
};

export default OfferBadge;

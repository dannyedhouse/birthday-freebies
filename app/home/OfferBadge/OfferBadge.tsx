interface OfferBadgeProps {
  type: "freebie" | "discount" | "no-app" | "limited";
}

const OfferBadge = (props: OfferBadgeProps) => {
  let offerType, badgeClass;

  switch (props.type) {
    case "freebie":
      offerType = "No app needed";
      badgeClass = "bg-teal-200";
      break;
    case "discount":
      offerType = "Discount";
      badgeClass = "bg-red-200";
      break;
    case "no-app":
      offerType = "No app needed";
      badgeClass = "bg-cyan-200";
      break;
    case "limited":
      offerType = "Limited time";
      badgeClass = "bg-amber-200";
      break;
  }

  return (
    <div
      className={`${badgeClass} text--800 text-xs px-2 inline-block rounded-full uppercase font-semibold`}
    >
      {offerType}
    </div>
  );
};

export default OfferBadge;

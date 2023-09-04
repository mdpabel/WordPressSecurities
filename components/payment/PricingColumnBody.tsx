import { TickIcon } from "@/components/common/icons";

const PricingColumnBody = ({
  allFeatures,
  className = "",
}: {
  allFeatures: string[];
  className?: string;
}) => {
  return (
    <ul role="list" className={"mb-8 space-y-4 text-left " + className}>
      {allFeatures.map((service, index) => (
        <li key={service} className="flex items-center space-x-3">
          <TickIcon />
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingColumnBody;

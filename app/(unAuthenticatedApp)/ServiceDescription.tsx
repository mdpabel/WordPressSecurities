import Button from "@/components/common/Button";
import { TickIcon } from "@/components/common/icons";
import Image from "next/image";

interface IServiceDescription {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  list: string[];
  pricingTableId: number[];
}

const ServiceDescription = ({
  title,
  subTitle,
  id,
  list,
  imgUrl,
  pricingTableId,
}: IServiceDescription) => {
  return (
    <div
      data-id={id}
      className="w-full flex flex-col space-y-4 md:space-x-8 md:px-4 py-8 md:pb-3 md:pt-0 rounded"
    >
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image width={600} height={400} src={imgUrl} alt="test" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-base">{subTitle}</p>
          </div>
          <ul className="grid grid-cols-2 space-y-1">
            {list.map((label, idx) => (
              <li className="flex space-x-2" key={idx}>
                <TickIcon /> <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="link"
          outline={true}
          href={`?type=instant&items=${String(pricingTableId)}#instant`}
        >
          Fix the issue
        </Button>
      </div>
    </div>
  );
};

export default ServiceDescription;

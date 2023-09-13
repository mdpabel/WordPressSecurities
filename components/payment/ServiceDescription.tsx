import { Button } from "@/components/common/Button";
import { TickIcon } from "@/components/common/icons";
import Image from "next/image";
import Link from "next/link";

interface IServiceDescription {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  list: string[];
  pricingTableId: number[];
  height?: string;
}

const ServiceDescription = ({
  title,
  subTitle,
  id,
  list,
  imgUrl,
  pricingTableId,
  height,
}: IServiceDescription) => {
  return (
    <div
      data-id={id}
      className="w-full flex flex-col space-y-4 md:space-x-8 md:px-4 py-8 md:pb-3 md:pt-0 rounded"
    >
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div
          style={{
            maxHeight: height,
          }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <Image
            style={{
              maxHeight: height,
            }}
            width={600}
            height={400}
            src={imgUrl}
            alt="test"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center">
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
          <div className="flex justify-end">
            <Button asChild variant="outline">
              <Link
                href={`?type=instant&items=${String(pricingTableId)}#instant`}
              >
                Fix the issue
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;

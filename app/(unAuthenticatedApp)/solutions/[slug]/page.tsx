import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Title } from "@/components/common/Title";
import React from "react";
import PricingTables from "@/components/payment/PricingTables";
import FAQ from "@/components/FAQ";
import Carousel from "../Carousel";
import PricingTable from "../PricingTable";
import { getServicesBySlug } from "@/lib/services";

type Props = {
  params: { slug: string };
};

const Solution = async ({ params }: Props) => {
  const service = await getServicesBySlug(params?.slug);

  const images = service?.carouselImages[0]?.map((img: any) => ({
    src: img?.full_image_url,
    alt: img?.title ?? "Carousel image",
  }));

  return (
    <ComponentWrapper className="pt-10">
      <div className="grid grid-cols-3 space-x-8">
        <div className="col-span-3 md:col-span-2 space-y-6">
          <Title className="text-2xl md:text-3xl">{service?.title}</Title>
          <Carousel images={images} />
          <div className="md:hidden pt-10">
            <PricingTables />
          </div>
          <div className="pt-5 md:pt-20 space-y-4">
            <Title>About this service</Title>
            <div
              className="prose max-w-full"
              dangerouslySetInnerHTML={{
                __html: service?.content,
              }}
            />
          </div>
          <div>
            <Title>Frequently Asked Questions</Title>
            <FAQ title={false} items={[1, 2, 3, 4, 5]} />
          </div>
        </div>
        <div className="hidden md:block col-span-1">
          <PricingTable />
        </div>
      </div>
      <div className="mt-5 md:mt-10">
        <Title>More services by WordPressSecurities</Title>
      </div>
    </ComponentWrapper>
  );
};

export default Solution;

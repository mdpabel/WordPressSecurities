import { Button } from "@/components/common/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";

import PricingColumnBody from "../PricingColumnBody";
import { SectionTitleWithSubTitle } from "@/components/common/Title";

const PricingCard = () => {
  return (
    <div>
      <SectionTitleWithSubTitle
        subTitle=" Crafted with skill and care to help our clients grow their business!"
        title="Place order"
      />
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Malware removal service</CardTitle>
          <CardDescription>
            Get Your Website Clean and Secure from Malicious Threats
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PricingColumnBody
            allFeatures={[
              "Malware/hacked removal",
              "Malware/hacked removal",
              "Malware/hacked removal",
            ]}
          />
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row space-x-10">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">
                  Malware removal service
                </h2>
                <p className="text-gray-700">
                  Get Your Website Clean and Secure from Malicious Threats
                </p>
              </div>
              <div className="hidden md:inline-block">
                <h2 className="text-4xl font-bold">$599</h2>
                <p className="text-gray-700">one time</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button>Order now</Button>
              <div className="inline-block md:hidden">
                <h2 className="text-4xl font-bold">$599</h2>
                <p className="text-gray-700">one time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCard;

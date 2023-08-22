import Button from "@/components/common/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="container border-black flex flex-col items-center justify-center px-4 mx-auto space-y-8 md:px-0 h-64 md:h-80">
      <div className="space-y-5 ">
        <h1 className="text-2xl font-semibold text-center md:text-6xl">
          Unmasking Threats
        </h1>
        <h2 className="mb-5 font-light text-gray-600 sm:text-xl">
          Hackers don&apos;t take vacations. Keep your WordPress site secure and
          give them no chance to exploit vulnerabilities.
        </h2>
      </div>
      <div className="space-x-4 flex">
        <Button type="link" href="?type=subscription#subscription">
          Fix hacked site
        </Button>
        <Button type="link" outline={true} href="?type=instant#instant">
          Plans & Pricing
        </Button>
      </div>
    </section>
  );
};

export default Hero;

export const PricingColumnHeaderFallback = () => {
  return (
    <div className="">
      <h3 className="mb-4 text-2xl font-semibold">Loading plan</h3>
      <p className="font-light text-gray-700 sm:text-lg ">
        Calculating the bill <span>(Save calculating vs monthly)</span>
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl">loading</span>
        <span className="text-gray-500 ">/month</span>
      </div>
    </div>
  );
};

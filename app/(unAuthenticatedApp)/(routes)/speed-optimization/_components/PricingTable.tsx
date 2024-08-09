import { Button } from '@/components/Button';
import { TickIcon } from '@/components/icons';
import { SectionTitleWithSubTitle } from '@/components/Title';

const services = [
  'Private forum access',
  'Private forum access',
  'Private forum access',
  'Private forum access',
];

const PricingTable = () => {
  return (
    <div className='pt-8'>
      <SectionTitleWithSubTitle
        title='Safely Empower Your Digital Business'
        subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
      />

      <div className='flex md:flex-row flex-col gap-8 shadow-sm mt-10 p-10 border rounded'>
        <div className='space-y-5 w-full md:w-2/3'>
          <h2 className='font-semibold text-xl'>Speed Optimization</h2>
          <p>
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
            amet indis perferendis blanditiis repellendus etur quidem assumenda.
          </p>
          <div>
            <h3 className='py-2 font-medium'>What’s included</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2'>
              {services.map((service, index) => (
                <li key={index} className='flex items-center space-x-1'>
                  <TickIcon className='text-[#c35797]' />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col justify-between space-y-5 md:space-y-0 w-full md:w-1/3'>
          <h3>Pay once, own it forever</h3>
          <strong>$349 USD</strong>
          <Button className='speed-optimization'>Pay now</Button>
          <p>Invoices and receipts available for easy company reimbursement</p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;

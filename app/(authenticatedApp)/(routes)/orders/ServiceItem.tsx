interface IServiceItem {
  label: string;
  price: number;
}

const ServiceItem = ({ label, price }: IServiceItem) => {
  return (
    <li className='border-gray-200 border-b rounded-t-lg w-full'>
      <div className='flex items-center pl-3'>
        <input
          readOnly
          id={label}
          type='checkbox'
          checked={true}
          className='border-gray-300 bg-gray-100 rounded w-4 h-4 text-blue-600 focus:ring-blue-500'
        />
        <label
          htmlFor={label}
          className='flex justify-between ml-2 py-3 w-full font-medium text-base text-gray-900'>
          <span>{label}</span>
          <span className='font-bold'>${price}</span>
        </label>
      </div>
    </li>
  );
};

export default ServiceItem;

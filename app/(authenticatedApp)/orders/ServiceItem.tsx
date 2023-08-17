interface IServiceItem {
  label: string;
  price: number;
}

const ServiceItem = ({ label, price }: IServiceItem) => {
  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg">
      <div className="flex items-center pl-3">
        <input
          readOnly
          id={label}
          type="checkbox"
          checked={true}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
        />
        <label
          htmlFor={label}
          className="w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between"
        >
          <span>{label}</span>
          <span className="font-bold">${price}</span>
        </label>
      </div>
    </li>
  );
};

export default ServiceItem;

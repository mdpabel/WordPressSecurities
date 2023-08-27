import clsx from "clsx";
import Image from "next/image";

const Message = ({ right, message }: { right?: boolean; message: string }) => {
  return (
    <div
      className={clsx({
        "flex items-end": true,
        "justify-end": right,
      })}
    >
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        {message.slice(0, 3) == "img" ? (
          <Image width={250} height={250} src={message.slice(4)} alt="Image" />
        ) : (
          <div
            className={clsx({
              "px-4 py-2 rounded-lg inline-block rounded-bl-none": true,
              "bg-blue-600 text-white": right,
              "bg-gray-300 text-gray-600": !right,
            })}
          >
            {message}
          </div>
        )}
      </div>
      <img
        src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className="w-6 h-6 rounded-full order-1"
      />
    </div>
  );
};

export default Message;

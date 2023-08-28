import clsx from "clsx";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../common/Avatar";

const Message = ({
  right,
  message,
  senderImg,
}: {
  right?: boolean;
  message: string;
  senderImg: string;
}) => {
  const isImg = senderImg.includes("https://img.clerk.com");
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

      <Avatar className="w-8 h-8">
        <AvatarImage src={senderImg} alt="@shadcn" />
        <AvatarFallback>Mr.</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Message;

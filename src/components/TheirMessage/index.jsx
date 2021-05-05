import React from "react";
import classnames from "classnames";

const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  const imageWrapperClass = classnames(
    "p-3 bg-gray-300 rounded-md max-h-64 max-w-64 float-right",
    {
      "ml-1": isFirstMessageByUser,
      "ml-12": !isFirstMessageByUser,
    }
  );

  const messageClass = classnames(
    "p-3 rounded-r-full rounded-bl-full px-5 float-left bg-purple-200",
    {
      "ml-1": isFirstMessageByUser,
      "ml-12": !isFirstMessageByUser,
    }
  );

  return (
    <div className="float-left w-full flex ml-5">
      {isFirstMessageByUser && (
        <div
          className="w-11 h-11 rounded-full text-white text-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <div className={imageWrapperClass}>
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="object-cover rounded-md max-h-52 max-w-52"
            style={{ minHeight: 100, minWidth: 100 }}
          />
        </div>
      ) : (
        <div
          className={messageClass}
          style={{
            maxWidth: "60%",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
